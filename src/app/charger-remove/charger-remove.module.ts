import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargerRemovePageRoutingModule } from './charger-remove-routing.module';

import { ChargerRemovePage } from './charger-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargerRemovePageRoutingModule
  ],
  declarations: [ChargerRemovePage]
})
export class ChargerRemovePageModule {}
