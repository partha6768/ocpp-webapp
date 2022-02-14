import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CommonService} from "../../_service/common-service";

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
  connectorTypeList = [];

  constructor(public modalController: ModalController, private commonService: CommonService) { }

  ngOnInit() {
    this.connectorTypeList = this.commonService.getConnectorTypeListForFilter();
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
