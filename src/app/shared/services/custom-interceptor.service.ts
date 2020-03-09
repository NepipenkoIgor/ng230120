import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
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
    let headers = req.headers
      .append('Content-Type', 'application/json');
    if (req.url !== '/auth/signin' && req.url !== '/auth/signup') {
      const authHeader = localStorage.getItem('accessToken');
      headers = authHeader ? headers.append('Authorization', authHeader) : headers;
    }
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
