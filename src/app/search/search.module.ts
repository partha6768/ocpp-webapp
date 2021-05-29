import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';

import { SearchPageRoutingModule } from './search-routing.module';
import {ViewRoutePageModule} from '../view-route/view-route.module';
import {QrScanComponent} from "./qr-scan/qr-scan.component";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {ChargeStationComponent} from "./charge-station/charge-station.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SearchPageRoutingModule,
        ViewRoutePageModule,
        ZXingScannerModule
    ],
  declarations: [SearchPage,QrScanComponent,ChargeStationComponent]
})
export class SearchPageModule {}
