import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const getProductsPending = createAction(
  '[Products Page] Get products pending'
);
export const getProductsSuccess = createAction(
  '[Products Page] Get products success',
  props<{ products: IProduct[] }>()
);
