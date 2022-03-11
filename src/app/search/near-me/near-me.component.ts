import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {DataService} from "../../_service/data.service";

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss'],
})
export class NearMeComponent implements OnInit {
  radiusInKm = 20;

  constructor(public modalController: ModalController, private dataService: DataService) { }

  ngOnInit() {}

  close() {
    this.dataService.updateDistanceForFilter(this.radiusInKm);
    this.modalController.dismiss();
  }

  changeDistance(radius) {
    this.radiusInKm = radius;
  }
}
