import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChargingPageRoutingModule } from './charging-routing.module';
import { ChargingPage } from './charging.page';
import { LateComponent } from "./late/late.component";
import {InProgressComponent} from "./in-progress/in-progress.component";
import {StopConfirmationComponent} from "./stop-confirmation/stop-confirmation.component";
import {ChargeCompleteComponent} from "./charge-complete/charge-complete.component";
import {PaymentCompleteComponent} from "./payment-complete/payment-complete.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChargingPageRoutingModule
  ],
  declarations: [LateComponent, ChargingPage, InProgressComponent, StopConfirmationComponent, ChargeCompleteComponent, PaymentCompleteComponent]
})
export class ChargingPageModule {}
