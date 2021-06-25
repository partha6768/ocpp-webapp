import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-on-route',
  templateUrl: './on-route.component.html',
  styleUrls: ['./on-route.component.scss'],
})
export class OnRouteComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
