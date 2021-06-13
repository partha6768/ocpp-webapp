import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-share-receipt',
  templateUrl: './share-receipt.component.html',
  styleUrls: ['./share-receipt.component.scss'],
})
export class ShareReceiptComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  openShareModal() {

  }
}
