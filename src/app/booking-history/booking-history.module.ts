import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingHistoryPage } from './booking-history.page';

import { BookingHistoryPageRoutingModule } from './booking-history-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookingHistoryPageRoutingModule
  ],
  declarations: [BookingHistoryPage]
})
export class BookingHistoryPageModule {}
