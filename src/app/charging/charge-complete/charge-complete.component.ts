import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {PaymentCompleteComponent} from "../payment-complete/payment-complete.component";
import {CommonService} from "../../_service/common-service";

@Component({
  selector: 'app-charge-complete',
  templateUrl: './charge-complete.component.html',
  styleUrls: ['./charge-complete.component.scss'],
})
export class ChargeCompleteComponent implements OnInit {
  txtObj: any;
  transactionId = 0;
  transactionData: any;
  startChargingData: any;
  stopChargingData: any;
  constructor(private router: Router, public modalController: ModalController, private activatedRoute: ActivatedRoute, private commonService: CommonService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.transactionId) {
        this.transactionId = params.transactionId;
        this.commonService.getTransactionDetail(params.transactionId).subscribe((data: any) => {
          if (data && data.result && data.result.isStopped) {
            const txt = data.result;
            this.txtObj = data.result;
            const txtLocalStorage = {
              connectorInfo: {
                connectorCode: txt.chargePointId + '' + txt.connectorId,
                pricing: txt.pricing
              },
              transactionData: {
                username: sessionStorage.getItem('username'),
                connectorCode: txt.chargePointId + '-' + txt.connectorId,
                requestedTimeMins: txt.requestedTimeMins,
                pricing: txt.pricing,
                userLatLng: txt.userLatLng,
                estimates: txt.estimates
              },
              startChargingData: {
                transactionId: txt.transactionId,
                startTime: new Date(txt.startTimestamp),
                stopTime: new Date(new Date(txt.startTimestamp).getTime() + txt.requestedTimeMins * 60000)
              },
              stopChargingData: {
                actuals: txt.actuals,
                startTimestamp: txt.startTimestamp,
                stopTimestamp: txt.stopTimestamp
              }
            };
            this.transactionData = txtLocalStorage.transactionData;
            this.startChargingData = txtLocalStorage.startChargingData;
            this.stopChargingData = txtLocalStorage.stopChargingData;
            localStorage.setItem('TRANSACTION', JSON.stringify(txtLocalStorage));
          } else {
            this.router.navigate(['/home/search/scan-qr']);
          }
        });
      } else {
        this.router.navigate(['/home/search/scan-qr']);
      }
    });
  }

  ngOnInit() {

  }

  async redirectToPayment() {
    const modal = await this.modalController.create({
      component: PaymentCompleteComponent,
      cssClass: 'payment-complete'
    });
    return await modal.present();
  }
}
