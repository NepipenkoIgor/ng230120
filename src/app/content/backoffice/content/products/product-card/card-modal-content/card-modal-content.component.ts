import { Component } from '@angular/core';
import { IProduct } from '../../products.service';

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
