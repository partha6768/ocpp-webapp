import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeCompletePage } from './charge-complete.page';
import { LateComponent } from "./late/late.component";

const routes: Routes = [
  {
    path: '',
    component: ChargeCompletePage
  },
  {
    path: 'late',
    component: LateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargeCompletePageRoutingModule {}
