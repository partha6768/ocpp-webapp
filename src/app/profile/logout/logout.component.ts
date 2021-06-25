import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
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

}
