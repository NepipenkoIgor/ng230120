import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(_route: ActivatedRouteSnapshot, {url}: RouterStateSnapshot): Observable<boolean> {
    return of(false)
      .pipe(switchMap((isLogged) => {
        if (!isLogged && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogged && (url === '/login' || url === '/signup')) {
          this.router.navigate(['/backoffice']);
          return of(false);
        }
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        return of(isLogged);
      }));
  };

}
