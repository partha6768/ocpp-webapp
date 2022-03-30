import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocketPageRoutingModule } from './socket-routing.module';

import { SocketPage } from './socket.page';
import {QrScanComponent} from "./qr-scan/qr-scan.component";
import {SettingsComponent} from "./settings/settings.component";
import {ChargerDetailComponent} from "./charger-detail/charger-detail.component";
import {ZXingScannerModule} from "@zxing/ngx-scanner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocketPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [SocketPage, QrScanComponent, SettingsComponent, ChargerDetailComponent]
})
export class SocketPageModule {}
