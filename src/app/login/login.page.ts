import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  authState: AuthState;
  user: CognitoUserInterface | undefined;
  constructor(private ref: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    onAuthUIStateChange((authState: AuthState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      if(this.authState === 'signedin' && this.user){
        this.router.navigate(['/login/slider']);
      }
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
