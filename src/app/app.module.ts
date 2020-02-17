import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
// NgModule -> es6 module
//  declarations => const/let
// imports - import;
// exports - export;
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    SharedModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// NgModule, directives , pipe, service
