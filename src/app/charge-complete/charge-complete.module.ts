import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargeCompletePageRoutingModule } from './charge-complete-routing.module';

import { ChargeCompletePage } from './charge-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargeCompletePageRoutingModule
  ],
  declarations: [ChargeCompletePage]
})
export class ChargeCompletePageModule {}
