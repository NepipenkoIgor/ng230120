import {
  Component, EventEmitter,
  Input, Output,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IExchangeRate } from './exchange-rates/exchange-rates.component';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input()
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    this.titleContent = `<span style = 'color:red' >${value}</span>`;
  }

  @Output()
  public myTitleChange: EventEmitter<any> = new EventEmitter();

  public titleContent: string = '';
  @Input()
  public d!: MatDrawer;

  public rates: IExchangeRate[] = [
    {value: 24, currency: 'EUR'},
    {value: 20, currency: 'USD'},
    {value: 0.4, currency: 'RUB'},
  ];

  public constructor() {
  }

  toggleSidenav(): void {
    this.d.toggle();
  }

}
