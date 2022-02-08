import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private readonly router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		Auth.currentUserInfo().then(user => {
			sessionStorage.setItem('username', user.attributes.email);
		});
		return new Promise((resolve) => {
			Auth.currentSession().then(loginSession => {
				if (loginSession) {
					resolve(true);
				} else {
					this.router.navigate(['/login']);
					resolve(false);
				}
			}).catch(err => {
				this.router.navigate(['/login']);
				resolve(false);
			});
		});
	}
}
