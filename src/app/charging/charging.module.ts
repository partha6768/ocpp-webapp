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
import {NgCircleProgressModule} from "ng-circle-progress";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChargingPageRoutingModule,
        NgCircleProgressModule,
        NgCircleProgressModule.forRoot({
            "backgroundPadding": 20,
            "radius": 200,
            "toFixed": 0,
            "outerStrokeWidth": 10,
            "showSubtitle": false,
            "showBackground": false,
            "showInnerStroke": false,
            "showTitle": false,
            "showUnits": false,
            "responsive": false,
            "startFromZero": false})
    ],
  declarations: [LateComponent, ChargingPage, InProgressComponent, StopConfirmationComponent, ChargeCompleteComponent, PaymentCompleteComponent]
})
export class ChargingPageModule {}
