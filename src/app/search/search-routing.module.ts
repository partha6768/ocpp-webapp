import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';
import {QrScanComponent} from "./qr-scan/qr-scan.component";
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
  },
  {
    path: 'scan-qr',
    component: QrScanComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}
