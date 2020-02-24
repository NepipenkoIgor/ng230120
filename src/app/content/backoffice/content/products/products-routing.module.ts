import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';


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
        data: {
          title: 'One product !!',
        },
        resolve: {
          product: ProductResolverService,
        }
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductsRoutingModule {
}
