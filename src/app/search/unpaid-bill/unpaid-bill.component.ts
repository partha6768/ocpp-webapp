import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-unpaid-bill',
  templateUrl: './unpaid-bill.component.html',
  styleUrls: ['./unpaid-bill.component.scss'],
})
export class UnpaidBillComponent implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  close() {
      this.modalController.dismiss();
  }
}
