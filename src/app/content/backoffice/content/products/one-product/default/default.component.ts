import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../../../store/reducers/products.reducer';

@Component({
  selector: 'courses-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input()
  public product!: IProduct;

  constructor() {
  }

  ngOnInit(): void {
  }

  public getTimeStamp() {
    return Date.now();
  }

}
