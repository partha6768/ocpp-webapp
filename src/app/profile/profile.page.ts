import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {ModalController} from "@ionic/angular";
import {UpdateNameComponent} from "./update-name/update-name.component";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  authState: AuthState;
  menus = [
    {
      'title': 'Payment Method',
      'icon': 'assets/icon/profile/credit-card.svg',
      'routes': 'payment-method'
    },
    {
      'title': 'Settings',
      'icon': 'assets/icon/profile/settings.svg',
      'routes': 'settings'
    },
    {
      'title': 'Help & Support',
      'icon': 'assets/icon/profile/question.svg',
      'routes': 'help-and-support'
    },
    {
      'title': 'Privacy Policy',
      'icon': 'assets/icon/profile/privacy.svg',
      'routes': 'privacy'
    },
    {
      'title': 'Terms & Conditions',
      'icon': 'assets/icon/profile/accept.svg',
      'routes': 'teams-and-conditions'
    },
    {
      'title': 'Logout',
      'icon': 'assets/icon/profile/logout.svg',
      'routes': 'logout'
    }
  ];

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  viewMenu(routes) {
    this.router.navigate(['/home/profile/' + routes]);
  }

  async showEditPopupName() {
    const modal = await this.modalController.create({
      component: UpdateNameComponent,
      cssClass: 'update-profile'
    });
    return await modal.present();
  }

  redirectToSocket() {
    this.router.navigate(['/socket']);
  }
}
