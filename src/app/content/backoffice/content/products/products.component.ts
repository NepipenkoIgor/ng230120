import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';

@Component({
  selector: 'courses-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  public onlyFavorites = false;
  // public searchText: string = '';

  public products$: Observable<IProduct[]> = this.productsService.getProduct();

  public constructor(
    private readonly productsService: ProductsService,
  ) {

  }

  public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;
  }
}
