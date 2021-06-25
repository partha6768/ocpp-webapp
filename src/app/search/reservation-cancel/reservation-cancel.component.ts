import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-cancel',
  templateUrl: './reservation-cancel.component.html',
  styleUrls: ['./reservation-cancel.component.scss'],
})
export class ReservationCancelComponent implements OnInit {
  isConfirm = false;

  constructor() { }

  ngOnInit() {}

  close() {

  }

  redirectPage() {
    this.isConfirm = true;
  }
}
