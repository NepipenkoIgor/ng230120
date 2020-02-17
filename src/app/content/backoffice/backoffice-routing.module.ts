import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./content/products/products.module').then((m) => m.ProductsModule),

      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class BackofficeRoutingModule {
}
