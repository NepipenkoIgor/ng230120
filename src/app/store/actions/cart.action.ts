import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';
import { ICartProduct } from '../reducers/cart.reducer';

export const addProductToCart = createAction(
  '[Cart Page] add product to cart',
  props<{ product: IProduct }>()
);
export const removeProductFromCart = createAction(
  '[Cart Page] remove product from cart',
  props<{ product: ICartProduct }>()
);

export const incrementCountForProduct = createAction(
  '[Cart Page] increment product in cart',
  props<{ product: ICartProduct }>()
);
export const decrementCountForProduct = createAction(
  '[Cart Page] decrement product from cart',
  props<{ product: ICartProduct }>()
);
