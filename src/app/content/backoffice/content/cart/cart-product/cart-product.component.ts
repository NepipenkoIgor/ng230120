import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../store/reducers/cart.reducer';

@Component({
  selector: 'courses-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {

  @Input()
  public product!: ICartProduct;

  @Output()
  public remove = new EventEmitter();
  @Output()
  public increment = new EventEmitter();
  @Output()
  public decrement = new EventEmitter();

  public decrementCount() {
    if (this.product.count === 1) {
      this.removeProduct();
      return;
    }
    this.decrement.emit(this.product);
  }

  public incrementCount() {
    this.increment.emit(this.product);
  }

  public removeProduct() {
    this.remove.emit(this.product);
  }

}
