import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../../../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.action';

@Component({
  selector: 'courses-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(
    private readonly modalService: ModalService,
    private readonly store: Store<IRootState>,
  ) {
  }

  public toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  public async addToCart() {
    const component = await import('./card-modal-content/card-modal-content.component')
    this.modalService.open({
      component: component.CardModalContentComponent,
      context: {
        product: this.product,
        save: () => {
          console.log('Save');
          this.store.dispatch(addProductToCart({product: this.product}));
          this.modalService.close();
        },
        close: () => {
          console.log('Close');
          this.modalService.close();
        },
      }
    });
  }
}
