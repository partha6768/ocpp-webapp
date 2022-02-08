import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from "./_service/user-service";
import {AuthGuardService} from "./_guard/auth-guard.service";
import {SiteService} from "./_service/site-service";
import {HttpClientModule} from "@angular/common/http";
import {CommonService} from "./_service/common-service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AmplifyUIAngularModule],
  providers: [SiteService, UserService, CommonService, AuthGuardService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
