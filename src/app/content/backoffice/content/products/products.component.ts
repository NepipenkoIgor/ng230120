import { Component, OnInit, Optional} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.action';
import { IProduct } from '../../../../store/reducers/products.reducer';

@Component({
  selector: 'courses-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  public onlyFavorites = false;

  public products$: Observable<IProduct[]> = this.store.select('products');

  // Host/SkipSelf/Self/
  public constructor(
    @Optional() private readonly store: Store<IRootState>,
  ) {

  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;
  }
}
