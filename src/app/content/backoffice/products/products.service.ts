import { Observable } from 'rxjs';
import { IProduct } from '../../../mock';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// TODO Injectable + Inject
@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}
