import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.scss'],
})
export class UpdateNameComponent implements OnInit {

  constructor(public toastController: ToastController, public modalController: ModalController) { }

  ngOnInit() {}

  saveName() {
    this.modalController.dismiss();
    this.showToast('<ion-icon name="checkmark-outline"></ion-icon> Name updated successfully !');
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toast_style',
      color: 'secondary'
    });
    await toast.present();
  }
}
