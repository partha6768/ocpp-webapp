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
  constructor(private router: Router, public modalController: ModalController, private dataService: DataService, private siteService: SiteService) { }

  ngOnInit() {
    this.dataService.startTransaction.subscribe((obj: any) => {
      if (obj == null) {
        this.router.navigate(['/home/search/scan-qr']);
      }
      this.transactionData = obj;
    });
  }

  stopTrasaction() {
    const connectorCode = this.transactionData.transactionData.connectorCode;
    const request = {
      vendorCode: connectorCode.split('-')[0],
      chargePointIdentity: connectorCode.split('-')[1],
      transactionId: this.transactionData.transactionId
    };
    this.siteService.stopCharging(request).subscribe((data: any) => {
      if (data.result) {
        this.modalController.dismiss();
        this.router.navigate(['/charging/charge-complete']);
      }
    });
  }
}
