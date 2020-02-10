import { Component, Input, OnInit } from '@angular/core';

export interface IExchangeRate {
  value: number;
  currency: string;
}

@Component({
  selector: 'courses-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {

  @Input()
  public rates: IExchangeRate[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
