import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { ModalController } from '@ionic/angular';
import { ShareReceiptComponent } from './share-receipt/share-receipt.component';

@Component({
  selector: 'app-booking-history',
  templateUrl: 'booking-history.page.html',
  styleUrls: ['booking-history.page.scss']
})
export class BookingHistoryPage implements OnInit {
  history = true;
  selectedChargingFilter: string;
  selectedReservationFilter: string;
  selectedMonthFilter: string;
  selectedYearFilter: string;
  chargingRecordOptions = [];
  reservationOptions = [];
  monthOptions = [];
  yearOptions = [];

  constructor(private router: Router, public modalController: ModalController) {}

  ngOnInit() {
      this.chargingRecordOptions = [{
        text: 'Last Charged',
        value: 'LAST_CHARGED'
      }, {
        text: 'Last 7 Days',
        value: 'LAST_7_DAYS'
      }, {
        text: 'Monthly',
        value: 'MONTHLY'
      }, {
        text: 'Annually',
        value: 'ANNUALLY'
      }];
      this.selectedChargingFilter = this.chargingRecordOptions[0].value;
      for (let year = 2019; year <= new Date().getFullYear(); year++) {
        this.yearOptions.push({text: year, value: year.toString()});
      }
      this.selectedYearFilter = new Date().getFullYear().toString();
      this.reservationOptions = [{
        text: 'All',
        value: 'ALL'
      }, {
        text: 'Successful',
        value: 'SUCCESSFUL'
      }, {
        text: 'Cancelled',
        value: 'CANCELLED'
      }];
      this.selectedReservationFilter = this.reservationOptions[0].value;
      const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      for (let month = 0; month <= monthNames.length - 1; month++) {
        this.monthOptions.push({text: monthNames[month], value: monthNames[month]});
      }
      this.selectedMonthFilter = this.monthOptions[new Date().getMonth()].value;
  }

  segmentChanged() {

  }

  toggleView(flag) {
    this.history = flag;
  }

    showDetail() {
        if (this.history) {
            this.router.navigate(['/home/booking-history/invoice']);
        } else {
            this.router.navigate(['/home/booking-history/reservation-details']);
        }
    }

    async openShareModal(){
      const modal = await this.modalController.create({
        component: ShareReceiptComponent,
        cssClass: 'share-receipt'
      });
      return await modal.present();
    }

}
