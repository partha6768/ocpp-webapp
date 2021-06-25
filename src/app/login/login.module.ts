import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {SliderComponent} from "./slider/slider.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        AmplifyUIAngularModule
    ],
  declarations: [LoginPage,SliderComponent]
})
export class LoginPageModule {}
