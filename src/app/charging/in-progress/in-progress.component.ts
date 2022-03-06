import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {StopConfirmationComponent} from "../stop-confirmation/stop-confirmation.component";
import {DataService} from "../../_service/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent implements OnInit {

  transactionData: any;
  constructor(private router: Router, public modalController: ModalController, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.startTransaction.subscribe((obj: any) => {
      if (obj == null) {
        this.router.navigate(['/home/search/scan-qr']);
      }
      this.transactionData = obj;
    });
  }

  async onChargeStop() {
    const modal = await this.modalController.create({
      component: StopConfirmationComponent,
      cssClass: 'stop-confirm'
    });
    return await modal.present();
  }

  close() {

  }
}
