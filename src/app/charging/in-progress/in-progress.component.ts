import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {StopConfirmationComponent} from "../stop-confirmation/stop-confirmation.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs/Rx";
import {CommonService} from "../../_service/common-service";

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
  transactionId = 0;
  txtDb: any;
  constructor(private router: Router, public modalController: ModalController, private activatedRoute: ActivatedRoute, private commonService: CommonService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.transactionId) {
        this.transactionId = params.transactionId;
        this.commonService.getTransactionDetail(params.transactionId).subscribe((data: any) => {
          if (data && data.result && !data.result.isStopped) {
            const txt = data.result;
            this.txtDb = data.result;
            const txtLocalStorage = {
              connectorInfo: {
                connectorCode: txt.chargePointId + '' + txt.connectorId,
                pricing: txt.pricing
              },
              transactionData: {
                username: sessionStorage.getItem('username'),
                connectorCode: txt.chargePointId + '-' + txt.connectorId,
                requestedTimeMins: txt.requestedTimeMins,
                pricing: txt.pricing,
                userLatLng: txt.userLatLng,
                estimates: txt.estimates
              },
              startChargingData: {
                transactionId: txt.transactionId,
                startTime: new Date(txt.startTimestamp),
                stopTime: new Date(new Date(txt.startTimestamp).getTime() + txt.requestedTimeMins * 60000)
              }
            };
            this.transactionData = txtLocalStorage.transactionData;
            this.startChargingData = txtLocalStorage.startChargingData;
            this.counter$ = Observable.interval(1000).map((x) => {
              return Math.floor((new Date(txtLocalStorage.startChargingData.stopTime).getTime() - new Date().getTime()) / 1000);
            });
            this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
            localStorage.setItem('TRANSACTION', JSON.stringify(txtLocalStorage));
          } else {
            this.router.navigate(['/home/search/scan-qr']);
          }
        });
      } else {
        this.router.navigate(['/home/search/scan-qr']);
      }
    });
  }

  ngOnInit() {
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
