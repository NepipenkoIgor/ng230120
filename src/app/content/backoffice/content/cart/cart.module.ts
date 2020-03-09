import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartProductComponent } from './cart-product/cart-product.component';


@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [
    SharedModule,
    CartRoutingModule,
  ]
})
export class CartModule {
}
