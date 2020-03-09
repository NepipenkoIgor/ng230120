import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../../../store/reducers/products.reducer';

@Component({
  selector: 'courses-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  @Input()
  public product!: IProduct;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.cdr.detach();
    setTimeout(() => {
      this.cdr.reattach();
    }, 5000);
  }

  public getTimeStamp() {
    return Date.now();
  }

}
