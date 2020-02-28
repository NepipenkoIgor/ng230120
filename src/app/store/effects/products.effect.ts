import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';
import { IProduct } from '../reducers/products.reducer';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IProduct[]>(`/products`)
      .pipe(
        mergeMap((products) => [
          getProductsSuccess({products}),
        ]),
        tap(() => {
          this.toastr.success('Angular is awesome',  'Toastr fun!');
        }),
        catchError(() => {
          this.toastr.error('Angular is awesome',  'Toastr fun!');
          return EMPTY
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
  }
}
// TODO why without injectable
