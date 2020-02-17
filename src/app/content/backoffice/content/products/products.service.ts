import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

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
