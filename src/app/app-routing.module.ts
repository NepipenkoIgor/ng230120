import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { CustomPreloadService } from './shared/services/custom-preload.service';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
        canActivate: [AuthGuardService],
        outlet: 'left'
      },
      {
        path: 'signup',
        loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'backoffice',
        loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
        canActivate: [AuthGuardService],
      },
      {
        path: '**',
        redirectTo: 'backoffice',
      },
    ], {preloadingStrategy: CustomPreloadService}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
