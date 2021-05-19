import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';

import { SearchPageRoutingModule } from './search-routing.module';
import {ViewRoutePageModule} from '../view-route/view-route.module';
import {QrScanComponent} from "./qr-scan/qr-scan.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchPageRoutingModule,
    ViewRoutePageModule
  ],
  declarations: [SearchPage,QrScanComponent]
})
export class SearchPageModule {}
