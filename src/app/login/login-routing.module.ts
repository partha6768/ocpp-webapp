import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import {SliderComponent} from "./slider/slider.component";
import {AuthGuardService} from "../_guard/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'slider',
    component: SliderComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
