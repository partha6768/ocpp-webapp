import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {RouterModule} from "@angular/router";
import {VehicleComponent} from "./vehicle/vehicle.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    RouterModule
  ],
  declarations: [HomePage, VehicleComponent]
})
export class HomePageModule {}
