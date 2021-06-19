import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';
import {LogoutComponent} from "./logout/logout.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {SettingsComponent} from "./settings/settings.component";
import {HelpAndSupportComponent} from "./help-and-support/help-and-support.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'teams-and-conditions',
    component: TermsAndConditionsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'help-and-support',
    component: HelpAndSupportComponent,
  },
  {
    path: 'payment-method',
    component: PaymentMethodComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
