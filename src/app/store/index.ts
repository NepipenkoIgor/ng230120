import { IProduct, productsReducer } from './reducers/products.reducer';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';

export interface IRootState {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
};
