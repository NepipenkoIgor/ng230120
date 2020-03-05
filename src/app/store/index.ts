import { IProduct, productsReducer } from './reducers/products.reducer';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { IUser, userReducer } from './reducers/user.reducer';

export interface IRootState {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
  user: IUser;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
};
