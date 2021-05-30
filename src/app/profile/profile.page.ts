import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  authState: AuthState;
  techs = [
    {
      'title': 'Payment Method',
      'icon': 'assets/icon/profile/credit-card.svg'
    },
    {
      'title': 'Settings',
      'icon': 'assets/icon/profile/settings.svg'
    },
    {
      'title': 'Help & Support',
      'icon': 'assets/icon/profile/question.svg'
    },
    {
      'title': 'Privacy Policy',
      'icon': 'assets/icon/profile/privacy.svg'
    },
    {
      'title': 'Terms & Conditions',
      'icon': 'assets/icon/profile/accept.svg'
    }
  ];

  constructor(private ref: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    onAuthUIStateChange((authState: AuthState, authData) => {
      this.authState = authState;
      if(this.authState === 'signedout'){
        this.router.navigate(['/login']);
      }
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
