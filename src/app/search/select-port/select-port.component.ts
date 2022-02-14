import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-port',
  templateUrl: './select-port.component.html',
  styleUrls: ['./select-port.component.scss'],
})
export class SelectPortComponent implements OnInit {

  connectorTypes = [];
  isWrongPort = false;
  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.connectorTypes = [
      { icon: 'assets/icon/port/CCS-2.svg', name: 'CCS-2'},
      { icon: 'assets/icon/port/ACType-1.svg', name: 'AC Type-1'},
      { icon: 'assets/icon/port/CCS-1.svg', name: 'CCS-1'},
      { icon: 'assets/icon/port/ACType-2.svg', name: 'AC Type-2'},
      { icon: 'assets/icon/port/BharatAC001.svg', name: 'BharatAC001'},
      { icon: 'assets/icon/port/TeslaCharger.svg', name: 'Tesla Charger'},
      { icon: 'assets/icon/port/Bharat-DC001-GB-T.svg', name: 'Bharat DC001 GB/T'}
    ];
  }

  close() {
    this.modalController.dismiss();
  }

  openLimitScreen() {
    this.modalController.dismiss();
    this.router.navigate(['/home/search/connect-port']);
  }

  openWrongPortScreen() {
    this.isWrongPort = true;
  }
}
