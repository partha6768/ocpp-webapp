import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryPage } from './booking-history.page';
import {InvoiceComponent} from "./invoice/invoice.component";
import {ReservationDetailComponent} from "./reservation-detail/reservation-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BookingHistoryPage,
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'reservation-details',
    component: ReservationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingHistoryPageRoutingModule {}
