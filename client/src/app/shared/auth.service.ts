import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import { environment } from '../../environments/environment';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // use Auth0 Lock widget for capturing user credentials
  lock = new Auth0Lock(environment.authClientId, environment.authUrl);

  constructor(
    private router: Router
  ) {
    // listen for an authentication event to be raised and if successful will log the user in
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error.message || error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
      });

      this.lock.hide();
    });
  }

  // display lock widget
  login() {
    this.lock.show();
  }

  // log user out of app
  logout() {
    // remove token and profile from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // send user back to public deals page after logout
    this.router.navigateByUrl('/deals');
  }

  // check to see if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }
}
