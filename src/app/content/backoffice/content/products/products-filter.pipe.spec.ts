import { ProductsFilterPipe } from './products-filter.pipe';
import { IProduct } from '../../../../store/reducers/products.reducer';

export const products: IProduct[] = [
  {
    '_id': '5e3c1ea178a3995c4b0b961d',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5e3c1ea178a3995c4b0b961e',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5e3c1ea178a3995c4b0b961f',
    'title': 'Product 41',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'author': 'Lena',
    'isFavorite': false
  },
];
describe('Products filter pipe', () => {
  let productsFilterPipe: ProductsFilterPipe;
  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });
  it('should filter by search text', () => {
    expect(productsFilterPipe.transform(products, '')).toEqual(products);
    expect(productsFilterPipe.transform(products, '41')).toEqual([products[2]]);
    expect(productsFilterPipe.transform(products, '221')).toEqual([products[1]]);
  });
  it('should filter by favorite checkbox', () => {
    expect(productsFilterPipe.transform(products, '', true)).toEqual([products[1]]);
    expect(productsFilterPipe.transform(products, '41', true)).toEqual([]);
    expect(productsFilterPipe.transform(products, '221', true)).toEqual([products[1]]);
  });
});
