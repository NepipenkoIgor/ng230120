import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from '../../../../../store/reducers/products.reducer';

@Injectable()
export class ProductResolverService implements Resolve<IProduct | null> {

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null> {
    const id = route.paramMap.get('id');
    return this.http.get<IProduct | null>(`/products/${id}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
            return product;
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }

}
