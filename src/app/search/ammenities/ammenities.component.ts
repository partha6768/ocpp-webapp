import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-ammenities',
  templateUrl: './ammenities.component.html',
  styleUrls: ['./ammenities.component.scss'],
})
export class AmmenitiesComponent implements OnInit {

  ammenities = [];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.ammenities = [
      { icon: 'assets/icon/ammenities/auto-service-station.svg', name: 'Auto Service Station', distance: 'On station'},
      { icon: 'assets/icon/ammenities/cafeteria.svg', name: 'Cafeteria', distance: 'On station'},
      { icon: 'assets/icon/ammenities/chemist-shop.svg', name: 'Chemist Shop', distance: 'On station'},
      { icon: 'assets/icon/ammenities/food-stall.svg', name: 'Food Stall', distance: '50 m'},
      { icon: 'assets/icon/ammenities/hotel.svg', name: 'Hotel', distance: '500 m'},
      { icon: 'assets/icon/ammenities/mall.svg', name: 'Mall', distance: '50 m'},
      { icon: 'assets/icon/ammenities/park-garden.svg', name: 'Park Garden', distance: '50 m'},
      { icon: 'assets/icon/ammenities/parking.svg', name: 'Parking', distance: '50 m'},
      { icon: 'assets/icon/ammenities/rest-room.svg', name: 'Rest Room', distance: '50 m'},
      { icon: 'assets/icon/ammenities/retail-store.svg', name: 'Retail Store', distance: '50 m'},
      { icon: 'assets/icon/ammenities/salon.svg', name: 'Salon', distance: '50 m'},
      { icon: 'assets/icon/ammenities/wifi.svg', name: 'Wifi', distance: '50 m'}
    ];
  }

  close() {
    this.modalController.dismiss();
  }


}
