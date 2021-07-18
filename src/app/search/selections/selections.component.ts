import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
  ammenities = [];
  connectorTypes = [];
  section = 'ALL';
  selector= 'All Connectors'
  Ammenitie= 'All Ammenities'
  distance = '500m'
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  changeSection(section) {
    this.section = section;
  }
  changeSelector(selector){
    this.selector = selector;
  }
  changeAmmenities(Ammenitie){
    this.Ammenitie = Ammenitie;
  }
  changeDistance(distance) {
    this.distance = distance;
  }
  close() {
    this.modalController.dismiss();
  }
}
