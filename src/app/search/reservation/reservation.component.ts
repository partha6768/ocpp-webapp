import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  selectTimeSlot($event) {

  }

  close() {
    this.modalController.dismiss();
  }
}
