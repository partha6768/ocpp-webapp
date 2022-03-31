import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargingPage } from './charging.page';
import { LateComponent } from "./late/late.component";
import {InProgressComponent} from "./in-progress/in-progress.component";
import {ChargeCompleteComponent} from "./charge-complete/charge-complete.component";

const routes: Routes = [
  {
    path: '',
    component: ChargingPage
  },
  {
    path: 'late',
    component: LateComponent
  },
  {
    path: 'in-progress/:transactionId',
    component: InProgressComponent
  },
  {
    path: 'charge-complete/:transactionId',
    component: ChargeCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingPageRoutingModule {}
