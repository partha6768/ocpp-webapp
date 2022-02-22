import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {UserService} from "../_service/user-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  authState: AuthState;
  user: CognitoUserInterface | undefined;
  constructor(private ref: ChangeDetectorRef, private router: Router, private userService: UserService) { }

  ngOnInit() {
    onAuthUIStateChange((authState: AuthState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      if(this.authState === 'signedin' && this.user){
        this.saveUser(this.user);
      }
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  saveUser(user) {
      if (user && user.attributes) {
        const request = {
          username: user.username,
          userDetails: {
            email: user.attributes.email,
            phoneNumber: user.attributes.phone_number,
            emailVerified: user.attributes.email_verified,
            phoneNumberVerified: user.attributes.phone_number_verified
          },
          address: {
            address1: " ",
            address2: " ",
            city: " ",
            state: " ",
            country: " ",
            zipCode: " "
          }
        };
        this.userService.saveUser(request).subscribe((data: any) => {
          if (data.result && data.result.status) {
            console.log('-----USER INFO SAVED------');
            this.router.navigate(['/login/slider']);
          }
        });
      }
  }
}
