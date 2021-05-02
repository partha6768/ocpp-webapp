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
