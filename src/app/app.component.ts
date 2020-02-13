import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct } from './mock';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductsService } from './products.service';

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

  public products$: Observable<IProduct[]> = this.productsService.getProduct();

  public constructor(
    private readonly productsService: ProductsService,
  ) {

  }


//  public products: IProducts[] = [];
  public ngOnInit(): void {
    console.log(this.productsService);
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;
  }
}
