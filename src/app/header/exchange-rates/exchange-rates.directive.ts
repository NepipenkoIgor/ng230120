import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IExchangeRate } from './exchange-rates.component';

@Directive({
  selector: '[coursesExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {

  @Input('coursesExchangeRatesFrom')
  public rates: IExchangeRate[] = [];

  @Input('coursesExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    // this.autoplay = mode;
  }

  // private autoplay!: 'on' | 'off';

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    const context = {
      $implicit: this.rates[0],
      controller: 'Angular is awesome',
    };
    this.vcr.createEmbeddedView(this.tpl, context);
  }

}
