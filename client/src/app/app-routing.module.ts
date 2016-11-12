import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './shared/auth-guard.service';
import { PublicDealsComponent } from './public-deals';
import { PrivateDealsComponent } from './private-deals';

const routes: Routes = [
  // dashboard redirect
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  // deals route
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  // protected route
  {
    path: 'special',
    component: PrivateDealsComponent,
    canActivate: [ AuthGuardService ]
  }
];

// export routes
// export const routing = RouterModule.forRoot(appRoutes);

// combine routing components into a single array
// export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];

// new, better NgModule approach
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
