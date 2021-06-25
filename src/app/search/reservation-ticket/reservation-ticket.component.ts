import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ReservationCancelComponent} from "../reservation-cancel/reservation-cancel.component";

@Component({
  selector: 'app-reservation-ticket',
  templateUrl: './reservation-ticket.component.html',
  styleUrls: ['./reservation-ticket.component.scss'],
})
export class ReservationTicketComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async cancelReserve() {
    const modal = await this.modalController.create({
      component: ReservationCancelComponent,
      cssClass: 'cancel-reservation'
    });
    return await modal.present();
  }
}
