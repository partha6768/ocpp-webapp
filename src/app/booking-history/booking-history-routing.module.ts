import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryPage } from './booking-history.page';
import {InvoiceComponent} from "./invoice/invoice.component";

const routes: Routes = [
  {
    path: '',
    component: BookingHistoryPage,
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingHistoryPageRoutingModule {}
