import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(public toastController: ToastController, private router: Router) { }

  ngOnInit() {}

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toast_style',
      color: 'secondary'
    });
    await toast.present();
  }

  agree() {
    this.showToast('<ion-icon name="checkmark-outline"></ion-icon> T&C updated successfully !');
    this.router.navigate(['/home/profile']);
  }
}
