import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './mock';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'course-root#test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  public title = 'ng230120';
  public drawer !: MatDrawer;
  public onlyFavorites = false;
  // public searchText: string = '';

  public products$: Observable<IProduct[]> = products$;
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

  public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;
  }

  // search({target}: Event) {
  //   this.searchText = (target as HTMLInputElement).value;
  // }
}
