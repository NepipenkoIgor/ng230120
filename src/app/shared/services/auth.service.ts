import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  login(user: { username: string, password: string }) {
    return this.http.post('/auth/signin', user);
  }
}
