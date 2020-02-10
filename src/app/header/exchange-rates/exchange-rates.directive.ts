import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IExchangeRate } from './exchange-rates.component';

@Directive({
  selector: '[coursesExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {

  @Input('coursesExchangeRatesOf')
  public rates: IExchangeRate[] = [];

  @Input('coursesExchangeRatesDuration')
  public ms: number = 1000;

  @Input('coursesExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }

  private index = 0;
  private context: any;
  private intervalId!: number;

  private autoplay!: 'on' | 'off';

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);

    this.resetInterval();
  }

  public next() {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev() {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }


  private resetInterval(): void {
    if (this.autoplay === 'off') {
      return;
    }
    this.clearInterval().initInterval();
  }

  private initInterval(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private clearInterval(): this {
    clearInterval(this.intervalId);
    return this;
  }
}
