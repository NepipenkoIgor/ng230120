import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwitcherComponent } from './switcher/switcher.component';


@NgModule({
  declarations: [SignupComponent, SwitcherComponent],
  imports: [
    SharedModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule {
}
