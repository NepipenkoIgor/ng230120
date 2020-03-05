import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';
import { IProduct } from '../reducers/products.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IProduct[]>(`/products`)
      .pipe(
        mergeMap((products) => [
          getProductsSuccess({products}),
        ]),
        catchError(() => {
          return EMPTY;
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
