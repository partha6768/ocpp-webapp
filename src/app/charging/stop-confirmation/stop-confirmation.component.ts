import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {DataService} from "../../_service/data.service";
import {SiteService} from "../../_service/site-service";

@Component({
  selector: 'app-stop-confirmation',
  templateUrl: './stop-confirmation.component.html',
  styleUrls: ['./stop-confirmation.component.scss'],
})
export class StopConfirmationComponent implements OnInit {
  transactionData: any;
  startChargingData: any;
  txtObj: any;
  constructor(private router: Router, public modalController: ModalController, private dataService: DataService, private siteService: SiteService) { }

  ngOnInit() {
    const txt = localStorage.getItem('TRANSACTION');
    this.txtObj = JSON.parse(txt);
    if (this.txtObj == null || this.txtObj.startChargingData == null) {
      this.router.navigate(['/home/search/scan-qr']);
    }
    this.transactionData = this.txtObj.transactionData;
    this.startChargingData = this.txtObj.startChargingData;
  }

  stopTrasaction() {
    const connectorCode = this.transactionData.connectorCode;
    const request = {
      vendorCode: connectorCode.split('-')[0],
      chargePointIdentity: connectorCode.split('-')[1],
      transactionId: this.startChargingData.transactionId
    };
    this.modalController.dismiss();
    this.siteService.stopCharging(request).subscribe((data: any) => {
      if (data.result) {
        this.txtObj.stopChargingData = data.result;
        localStorage.setItem('TRANSACTION', JSON.stringify(this.txtObj));
        this.router.navigate(['/charging/charge-complete']);
      }
    });
  }
}
