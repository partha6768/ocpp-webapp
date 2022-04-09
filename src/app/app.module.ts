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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonService} from "./_service/common-service";
import {DataService} from "./_service/data.service";
import {LoaderInterceptor} from "./loader/loader.interceptor";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AmplifyUIAngularModule],
  providers: [SiteService, UserService, DataService, CommonService, AuthGuardService, Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
