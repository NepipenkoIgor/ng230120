import { Observable } from 'rxjs';
import { IProduct } from './mock';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


// TODO Injectable + Inject
@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    @Inject('baseUrl') private baseUrl: string [],
  ) {

  }

  public getProduct(): Observable<IProduct[]> {
    console.log(this.baseUrl);
    return this.http.get<{ data: IProduct[] }>(`${this.baseUrl[0]}/products`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00',
      },
    })
      .pipe(
        map((res) => res.data)
      );
  }


}
