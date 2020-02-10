import { Component, Input } from '@angular/core';
import { IProduct } from '../mock';

@Component({
  selector: 'courses-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }
}
