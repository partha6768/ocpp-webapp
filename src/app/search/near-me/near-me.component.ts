import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss'],
})
export class NearMeComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}