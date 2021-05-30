import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingHistoryPage } from './booking-history.page';

import { BookingHistoryPageRoutingModule } from './booking-history-routing.module';
import {InvoiceComponent} from "./invoice/invoice.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookingHistoryPageRoutingModule
  ],
  declarations: [BookingHistoryPage,InvoiceComponent]
})
export class BookingHistoryPageModule {}
