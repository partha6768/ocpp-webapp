import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {StopConfirmationComponent} from "../stop-confirmation/stop-confirmation.component";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

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
