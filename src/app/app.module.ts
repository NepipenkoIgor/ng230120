import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/backoffice/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './content/backoffice/sidebar/sidebar.component';
import { ProductCardComponent } from './content/backoffice/products/product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SanitarPipe } from './content/backoffice/header/sanitar.pipe';
import { ExchangeRatesComponent } from './content/backoffice/header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './content/backoffice/header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './content/backoffice/header/exchange-rates/hidden.directive';
import { ProductsService } from './content/backoffice/products/products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { CustomInterceptorService } from './custom-interceptor.service';
import { CardModalContentComponent } from './content/backoffice/products/product-card/card-modal-content/card-modal-content.component';
import { ModalModule } from './modal/modal.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProductsComponent } from './content/backoffice/products/products.component';
import { LoginComponent } from './content/login/login.component';
import { SignupComponent } from './content/signup/signup.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
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
    HiddenDirective,
    CardModalContentComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    BackofficeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true,
    },
    ProductsService,
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
    },
    {
      provide: 'baseUrl',
      useValue: 'http://google.com',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// NgModule, directives , pipe, service
