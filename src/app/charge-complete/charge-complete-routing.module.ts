import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeCompletePage } from './charge-complete.page';

const routes: Routes = [
  {
    path: '',
    component: ChargeCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargeCompletePageRoutingModule {}
