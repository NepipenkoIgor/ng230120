import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondAuthGuard implements CanActivate {
  public canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> {
    console.log('Second')
    return of(false);
  }

}
