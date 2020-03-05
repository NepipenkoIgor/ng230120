import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { cartProducts, ICartProduct, trueProductsPrice } from 'src/app/store/reducers/cart.reducer';
import { decrementCountForProduct, incrementCountForProduct, removeProductFromCart } from '../../../../store/actions/cart.action';

@Component({
  selector: 'courses-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$ = this.store.select(cartProducts);
  public totalPrice$ = this.store.select(trueProductsPrice);

  constructor(
    private readonly store: Store<IRootState>
  ) {
  }

  ngOnInit(): void {

  }

  public decrementCount(product: ICartProduct) {
    if (product.count === 1) {
      this.removeProduct(product);
      return;
    }
    this.store.dispatch(decrementCountForProduct({product}));
  }

  public incrementCount(product: ICartProduct) {
    this.store.dispatch(incrementCountForProduct({product}));
  }

  public removeProduct(product: ICartProduct) {
    this.store.dispatch(removeProductFromCart({product}));
  }


  public trackById(_index: number, item: ICartProduct) {
    return item._id;
  }

}
