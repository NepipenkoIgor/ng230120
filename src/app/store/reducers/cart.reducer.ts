import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { IProduct } from './products.reducer';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { addProductToCart, decrementCountForProduct, incrementCountForProduct, removeProductFromCart } from '../actions/cart.action';

export interface ICartProduct extends IProduct {
  count: number;
}

export const cartAdapter = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id,
});

export const initialState: EntityState<ICartProduct> = cartAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(addProductToCart, (state, {product}) => {
    const entity = state.entities[product._id];
    return cartAdapter.upsertOne({
      ...product,
      count: entity ? entity.count + 1 : 1,
    }, state);
  }),
  on(removeProductFromCart, (state, {product}) => {
    return cartAdapter.removeOne(product._id, state);
  }),
  on(incrementCountForProduct, (state, {product}) => {
    return cartAdapter.updateOne({
      id: product._id, changes: {
        count: product.count + 1,
      },
    }, state);
  }),
  on(decrementCountForProduct, (state, {product}) => {
    return cartAdapter.updateOne({
      id: product._id, changes: {
        count: product.count - 1,
      },
    }, state);
  }),
);

export const {selectAll} = cartAdapter.getSelectors();
export const selectCartState = createFeatureSelector<EntityState<ICartProduct>>('cart');

export const selectCartProducts = createSelector(selectCartState, selectAll);

export function cartReducer(state: EntityState<ICartProduct> | undefined, action: Action) {
  return reducer(state, action);
}
