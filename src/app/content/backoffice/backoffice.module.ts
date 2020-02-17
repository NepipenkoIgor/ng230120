import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SanitarPipe } from './header/sanitar.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';


@NgModule({
  declarations: [BackofficeComponent, HeaderComponent,
    SidebarComponent,
    SanitarPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    ],
  imports: [
    SharedModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule {
}
