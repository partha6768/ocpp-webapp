import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {StopConfirmationComponent} from "../stop-confirmation/stop-confirmation.component";
import {PaymentCompleteComponent} from "../payment-complete/payment-complete.component";

@Component({
  selector: 'app-charge-complete',
  templateUrl: './charge-complete.component.html',
  styleUrls: ['./charge-complete.component.scss'],
})
export class ChargeCompleteComponent implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {}

  async redirectToPayment() {
    const modal = await this.modalController.create({
      component: PaymentCompleteComponent,
      cssClass: 'payment-complete'
    });
    return await modal.present();
  }
}
