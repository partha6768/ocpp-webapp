import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  selectTimeSlot($event) {

  }

  close() {
    this.modalController.dismiss();
  }

  openReserveConfirmScreen() {
    this.modalController.dismiss();
    this.router.navigate(['/home/search/reservation-ticket']);
  }
}
