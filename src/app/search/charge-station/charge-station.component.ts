import { Component, OnInit } from '@angular/core';
import {VehicleComponent} from "../../home/vehicle/vehicle.component";
import {ModalController} from "@ionic/angular";
import {AmmenitiesComponent} from "../ammenities/ammenities.component";

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
  baseURL = 'http://localhost:4200/';
  ammenitieIcons = [];
  connectiorPorts = [];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.ammenitieIcons = [
        'assets/icon/ammenities/auto-service-station.svg',
        'assets/icon/ammenities/cafeteria.svg',
        'assets/icon/ammenities/chemist-shop.svg',
        'assets/icon/ammenities/food-stall.svg',
        'assets/icon/ammenities/hotel.svg',
        'assets/icon/ammenities/mall.svg',
        'assets/icon/ammenities/park-garden.svg',
        'assets/icon/ammenities/parking.svg',
        'assets/icon/ammenities/rest-room.svg',
        'assets/icon/ammenities/retail-store.svg',
        'assets/icon/ammenities/salon.svg',
        'assets/icon/ammenities/wifi.svg'
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
            cssClass: 'view-ammenities'
        });
        return await modal.present();
    }

}
