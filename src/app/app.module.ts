import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SanitarPipe } from './header/sanitar.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
// NgModule -> es6 module
//  declarations => const/let
// imports - import;
// exports - export;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    SanitarPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// NgModule, directives , pipe, service
