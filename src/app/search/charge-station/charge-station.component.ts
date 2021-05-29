import { Component, OnInit } from '@angular/core';
import {VehicleComponent} from "../../home/vehicle/vehicle.component";
import {ModalController} from "@ionic/angular";
import {AmmenitiesComponent} from "../ammenities/ammenities.component";
import {Router} from "@angular/router";
import {ReservationComponent} from "../reservation/reservation.component";

@Component({
  selector: 'app-charge-station',
  templateUrl: './charge-station.component.html',
  styleUrls: ['./charge-station.component.scss'],
})
export class ChargeStationComponent implements OnInit {
  slideOpts = {
    slidesPerView: 2,
    spaceBetween: 0
  };
  ammenitieIcons = [];
  connectiorPorts = [];
  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
    this.ammenitieIcons = [
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
    this.connectiorPorts = [
      'assets/icon/port/port-1.svg',
      'assets/icon/port/port-2.svg',
      'assets/icon/port/port-3.svg'
    ];
  }

    async openAmmenitiesModal() {
        const modal = await this.modalController.create({
            component: AmmenitiesComponent,
            cssClass: 'view-ammenities',
            backdropDismiss: false
        });
        return await modal.present();
    }

    async reservation() {
        this.modalController.dismiss();
        const modal = await this.modalController.create({
            component: ReservationComponent,
            cssClass: 'view-reservation',
            backdropDismiss: false
        });
        return await modal.present();
    }
}
