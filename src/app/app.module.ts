import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { ToastrModule } from 'ngx-toastr';
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
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effects),
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// NgModule, directives , pipe, service
