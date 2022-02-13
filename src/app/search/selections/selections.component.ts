import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
  selectedChargerType: string;
  selectedConnectorType: string;
  distance: number;
  isOnlyFree: boolean;
  isOnlyAvailable: boolean;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.resetFilter();
  }

  changeChargerType(chargerType) {
    this.selectedChargerType = chargerType;
  }
  changeConnectorType(connectorType){
    this.selectedConnectorType = connectorType;
  }
  changeDistance(distance) {
    this.distance = distance;
  }
  close() {
    this.modalController.dismiss();
  }

  resetFilter() {
    this.isOnlyFree = false;
    this.isOnlyAvailable = true;
    this.selectedChargerType = 'ALL';
    this.selectedConnectorType= 'ALL';
    this.distance = 20;
  }
}
