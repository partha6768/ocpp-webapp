import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';
import {QrScanComponent} from "./qr-scan/qr-scan.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ChargingLimitComponent} from "./charging-limit/charging-limit.component";
import {ReservationTicketComponent} from "./reservation-ticket/reservation-ticket.component";
import {ConnectPortComponent} from "./connect-port/connect-port.component";

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
  },
  {
    path: 'reservation-ticket',
    component: ReservationTicketComponent,
  },
  {
    path: 'connect-port',
    component: ConnectPortComponent,
  },
  {
    path: 'set-limit',
    component: ChargingLimitComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}
