import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargerRemovePage } from './charger-remove.page';

const routes: Routes = [
  {
    path: '',
    component: ChargerRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargerRemovePageRoutingModule {}
