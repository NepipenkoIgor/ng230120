import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CardModalContentComponent } from './product-card/card-modal-content/card-modal-content.component';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';


@NgModule({
  declarations: [CardModalContentComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService,
    ProductResolverService
  ]
})
export class ProductsModule {
}
