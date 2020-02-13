import { Observable } from 'rxjs';
import { IProduct } from './mock';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';


// TODO Injectable + Inject
@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
  ) {

  }

  public getProduct(): Observable<IProduct[]> {
    console.log(this.baseUrl);
    return this.http.get<{ data: IProduct[] }>(`${this.baseUrl}/products`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00',
      },
    })
      .pipe(
        map((res) => res.data)
      );
  }


}
