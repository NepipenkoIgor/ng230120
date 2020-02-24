import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log('Init');
    console.log(this.activatedRoute.snapshot);
    setTimeout(() => {
      this.router.navigate(['/backoffice', '5e53fe8a8f45d94cf862bb07'], {queryParams: {page: 1}});
    }, 5000);
  }

}
