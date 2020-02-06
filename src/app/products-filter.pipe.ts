import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './mock';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchText: string): IProduct[] {
    console.log('calculate');
    if (!searchText) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText);
    });
  }

}
