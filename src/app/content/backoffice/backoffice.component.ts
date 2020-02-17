import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'courses-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent  {

  public title = 'ng230120';
  public drawer !: MatDrawer;

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
