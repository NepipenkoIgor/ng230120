import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { customRouteAnimation } from './custom-route.animation';

@Component({
  selector: 'courses-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css'],
  animations: [customRouteAnimation]
})
export class BackofficeComponent {

  public title = 'ng230120';
  public drawer !: MatDrawer;

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public getRouterState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.state;
  }
}
