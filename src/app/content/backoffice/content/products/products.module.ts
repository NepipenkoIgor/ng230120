import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';
import { DefaultComponent } from './one-product/default/default.component';
import { OnPushComponent } from './one-product/on-push/on-push.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
    DefaultComponent,
    OnPushComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductResolverService
  ]
})
export class ProductsModule {
}
