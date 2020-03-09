import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'courses-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public title$ = this.activatedRoute.data.pipe(pluck('title'));
  public product$ = this.activatedRoute.data.pipe(pluck('product'));

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    // private readonly ngZone: NgZone,
  ) {
  }

  ngOnInit(): void {
    console.log('Init');
    console.log(this.activatedRoute.snapshot);

    // this.ngZone.runOutsideAngular(() => {
    //
    // });

    // vk.getUser((user) => {
    //   console.log(user);
    //   this.ngZone.run(() => {
    //     this.user = user;
    //   });
    // });
  }

}
