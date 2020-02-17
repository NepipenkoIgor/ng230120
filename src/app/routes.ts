import { Route } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { SignupComponent } from './content/signup/signup.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { ProductsComponent } from './content/backoffice/products/products.component';

export const routes: Route[] = [
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'backoffice',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'backoffice',
  },
];

// TODO ../../
