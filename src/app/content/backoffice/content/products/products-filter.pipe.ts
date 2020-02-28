import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../../store/reducers/products.reducer';

@Pipe({
  name: 'productsFilter',
  pure: false,
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchText: string, onlyFavorites: boolean): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = products.filter((product: IProduct) => product.isFavorite);
    }
    if (!searchText) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText);
    });
  }

}
