import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ProfilePage}]),
        ProfilePageRoutingModule,
        AmplifyUIAngularModule,
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
