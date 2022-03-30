import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {StopConfirmationComponent} from "../stop-confirmation/stop-confirmation.component";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent implements OnInit, OnDestroy {

  transactionData: any;
  startChargingData: any;
  counter$: Observable<number>;
  subscription: Subscription;
  message: string;
  counter: any;

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {
    const txt = localStorage.getItem('TRANSACTION');
    const txtObj = JSON.parse(txt);
    if (txtObj == null || txtObj.startChargingData == null) {
      this.router.navigate(['/home/search/scan-qr']);
    }
    this.transactionData = txtObj.transactionData;
    this.startChargingData = txtObj.startChargingData;
    this.counter$ = Observable.interval(1000).map((x) => {
      return Math.floor((new Date(txtObj.startChargingData.stopTime).getTime() - new Date().getTime()) / 1000);
    });
    this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  dhms(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;
    return [
      hours + ':',
      minutes + ':',
      seconds
    ].join('');
  }

  async onChargeStop() {
    const modal = await this.modalController.create({
      component: StopConfirmationComponent,
      cssClass: 'stop-confirm'
    });
    return await modal.present();
  }

  close() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
