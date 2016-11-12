import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    // if user is not logged in send them to homepage
    if (!this.authService.loggedIn()) {
      this.router.navigate(['']);
      return false;
    }

    // else, continue
    return true;
  }

}
