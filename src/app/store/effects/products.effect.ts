import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';
import { IProduct } from '../reducers/products.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../index';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    withLatestFrom(this.store.select('user')),
    switchMap(([, user]) => {
      console.log('User from store', user);
      return this.http.get<IProduct[]>(`/products`)
        .pipe(
          mergeMap((products) => [
            getProductsSuccess({products}),
          ]),
          catchError(() => {
            return EMPTY;
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<IRootState>,
  ) {
  }
}
