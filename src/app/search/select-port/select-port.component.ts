import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {CommonService} from "../../_service/common-service";
import {DataService} from "../../_service/data.service";

@Component({
  selector: 'app-select-port',
  templateUrl: './select-port.component.html',
  styleUrls: ['./select-port.component.scss'],
})
export class SelectPortComponent implements OnInit {

  connectorTypes = [];
  isWrongPort = false;
  selectedConnectorType: any;
  constructor(public modalController: ModalController, private router: Router, private commonService: CommonService, private dataService: DataService) { }

  ngOnInit() {
    this.connectorTypes = this.commonService.getConnectorTypeListForFilter();
  }

  close() {
    this.modalController.dismiss();
  }

  openLimitScreen() {
    this.modalController.dismiss();
    this.router.navigate(['/home/search/connect-port']);
  }

  openWrongPortScreen() {
    this.isWrongPort = false;
    this.modalController.dismiss();
    this.router.navigate(['/home/search/connect-port']);
  }

  changeConnectorType(connectorType) {
    this.selectedConnectorType = connectorType;
  }
}
