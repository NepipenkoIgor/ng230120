import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductComponent } from './cart-product.component';
import { ICartProduct } from '../../../../../store/reducers/cart.reducer';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

export const testPorduct: ICartProduct = {
  '_id': '5e3c1ea178a3995c4b0b961d',
  'title': 'Product 111',
  'img': 'assets/img/product-4.jpg',
  'price': 2345,
  'author': 'Igor',
  'isFavorite': false,
  count: 2,
};
describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    component.product = testPorduct;
    fixture.detectChanges();
    spyOn(component, 'decrementCount')
      .and
      .callThrough();

    spyOn(component, 'incrementCount')
      .and
      .callThrough();

    spyOn(component, 'removeProduct')
      .and
      .callThrough();

    spyOn(component.remove, 'emit')
      .and
      .callThrough();
    spyOn(component.increment, 'emit')
      .and
      .callThrough();
    spyOn(component.decrement, 'emit')
      .and
      .callThrough();
  }));

  it('should decrement', () => {
    const decrementBtn = fixture.debugElement.query(By.css('.decrement'));
    decrementBtn.triggerEventHandler('click', null);
    expect(component.decrementCount).toHaveBeenCalled();
    expect(component.decrement.emit).toHaveBeenCalled();
  });
  it('should decrement and remove', () => {
    component.product = {
      ...component.product,
      count: 1,
    };
    fixture.detectChanges();
    const decrementBtn = fixture.debugElement.query(By.css('.decrement'));
    decrementBtn.triggerEventHandler('click', null);
    expect(component.decrementCount).toHaveBeenCalled();
    expect(component.decrement.emit).not.toHaveBeenCalled();
    expect(component.removeProduct).toHaveBeenCalled();
    expect(component.remove.emit).toHaveBeenCalled();
  });
});
