import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';
import { filter, map } from 'rxjs/operators';

export interface IRes {
  data: any;
}

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
  ) {
  }

  public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers = req.headers
      .append('Content-Type', 'application/json')
      .append('Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00');
    const jsonReq = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`,
    });

    return next.handle(jsonReq)
      .pipe(
        filter(this.isHttpResponse),
        map((res: HttpResponse<IRes>) => {
          return res.clone({body: res?.body?.data});
        })
      );
  }

  private isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
