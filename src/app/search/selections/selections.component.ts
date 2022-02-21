import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CommonService} from "../../_service/common-service";
import {DataService} from "../../_service/data.service";

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
  selectedChargerType = '';
  selectedConnectorType = '';
  distance = 20;
  isOnlyFree = false;
  isOnlyAvailable = true;
  connectorTypeList = [];

  constructor(public modalController: ModalController, private dataService: DataService, private commonService: CommonService) { }

  ngOnInit() {
    this.connectorTypeList = this.commonService.getConnectorTypeListForFilter();
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
    this.selectedChargerType = '';
    this.selectedConnectorType= '';
    this.distance = 20;
  }

  applyFilter() {
    const filterObj = {
      distance: this.distance,
      connectorType: this.selectedConnectorType,
      chargerType: this.selectedChargerType,
      isFree: this.isOnlyFree,
      isAvailable: this.isOnlyAvailable
    };
    this.dataService.updateFilter(filterObj);
  }
}
