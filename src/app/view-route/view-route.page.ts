import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.page.html',
  styleUrls: ['./view-route.page.scss'],
})
export class ViewRoutePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
