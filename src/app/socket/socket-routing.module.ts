import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocketPage } from './socket.page';
import {QrScanComponent} from "./qr-scan/qr-scan.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {
    path: '',
    component: SocketPage
  },
  {
    path: 'scan-qr',
    component: QrScanComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocketPageRoutingModule {}
