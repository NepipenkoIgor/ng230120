import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./content/products/products.module').then((m) => m.ProductsModule),
            data: {
              state: 'products'
            }
          },
          {
            path: 'order/cart',
            loadChildren: () => import('./content/cart/cart.module').then((m) => m.CartModule),
            data: {
              state: 'cart'
            }
          },
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class BackofficeRoutingModule {
}
