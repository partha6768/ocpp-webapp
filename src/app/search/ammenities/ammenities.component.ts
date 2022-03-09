import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-ammenities',
  templateUrl: './ammenities.component.html',
  styleUrls: ['./ammenities.component.scss'],
})
export class AmmenitiesComponent implements OnInit {

  @Input()
  ammenities = [];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }


}
