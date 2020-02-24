import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: ':id',
        component: OneProductComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductsRoutingModule {
}
