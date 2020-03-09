import { Component, NgModule } from '@angular/core';
import { IProduct } from '../../../../../../store/reducers/products.reducer';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'courses-card-modal-content',
  templateUrl: './card-modal-content.component.html',
  styleUrls: ['./card-modal-content.component.css']
})
export class CardModalContentComponent {

  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;

}

@NgModule({
  declarations: [CardModalContentComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ],
})
// @ts-ignore
class CardModalContentModule {

}
