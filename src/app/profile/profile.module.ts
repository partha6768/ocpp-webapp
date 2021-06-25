import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {HelpAndSupportComponent} from "./help-and-support/help-and-support.component";
import {LogoutComponent} from "./logout/logout.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {SettingsComponent} from "./settings/settings.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {UpdateNameComponent} from "./update-name/update-name.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ProfilePage}]),
        ProfilePageRoutingModule,
        AmplifyUIAngularModule,
    ],
  declarations: [ProfilePage, HelpAndSupportComponent, LogoutComponent, PaymentMethodComponent, TermsAndConditionsComponent, SettingsComponent, PrivacyComponent, UpdateNameComponent]
})
export class ProfilePageModule {}
