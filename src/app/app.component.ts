import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { IProducts, products$ } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'course-root#test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  public title = 'ng230120';
  public drawer !: MatDrawer;

  public products$: Observable<IProducts[]> = products$;
//  public products: IProducts[] = [];

  public account = {
    name: 'Ihor',
    age: 33,
  };

  public ngOnInit(): void {
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
    // Promise.resolve().then(() =>);
  }
}
