import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingHistoryPage } from './booking-history.page';

import { BookingHistoryPageRoutingModule } from './booking-history-routing.module';
import {InvoiceComponent} from "./invoice/invoice.component";
import {ReservationDetailComponent} from "./reservation-detail/reservation-detail.component";
import {ShareReceiptComponent} from "./share-receipt/share-receipt.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookingHistoryPageRoutingModule
  ],
  declarations: [BookingHistoryPage,InvoiceComponent, ReservationDetailComponent, ShareReceiptComponent]
})
export class BookingHistoryPageModule {}
