import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CardModalContentComponent } from './product-card/card-modal-content/card-modal-content.component';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';


@NgModule({
  declarations: [CardModalContentComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService,
  ]
})
export class ProductsModule {
}
