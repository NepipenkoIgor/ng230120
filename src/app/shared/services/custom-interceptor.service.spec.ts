import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { AuthService } from './auth.service';
import { IProduct } from '../../store/reducers/products.reducer';

export const products: IProduct[] = [
  {
    '_id': '5e3c1ea178a3995c4b0b961d',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5e3c1ea178a3995c4b0b961e',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5e3c1ea178a3995c4b0b961f',
    'title': 'Product 41',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'author': 'Lena',
    'isFavorite': false
  },
];
describe('Auth interceptor ', () => {
  const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00';
  let httpMocked: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CustomInterceptorService,
          multi: true,
        },
        {
          provide: BASE_URL_TOKEN,
          useValue: BASE_URL,
        },
      ]
    });
    httpMocked = TestBed.inject(HttpTestingController);
    localStorage.setItem('accessToken', accessToken)
  });
  it('should dont have Authorization header', inject([AuthService, BASE_URL_TOKEN], (authService: AuthService, baseUrl: string) => {
    const url = `${baseUrl}/auth/signin`;
    const user = {username: 'Ihor', password: '123'};
    authService.login(user)
      .subscribe();
    const httpRequest: TestRequest = httpMocked.expectOne({
      method: 'POST',
      url,
    });
    expect(httpRequest.request.headers.has('Authorization')).toBeFalsy();
    expect(httpRequest.request.body).toEqual(user);
  }));
  it('should dont have Authorization header', inject([HttpClient, BASE_URL_TOKEN], (http: HttpClient, baseUrl: string) => {
    const url = `${baseUrl}/products`;
    http.get<IProduct[]>(`/products`)
      .subscribe((response) => {
        expect(response).toEqual(products);
      });
    const httpRequest: TestRequest = httpMocked.expectOne({
      method: 'GET',
      url,
    });
    expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    expect(httpRequest.request.headers.get('Authorization')).toEqual(accessToken);
    httpRequest.flush({
      data: products,
      error: null
    });

  }));
});
