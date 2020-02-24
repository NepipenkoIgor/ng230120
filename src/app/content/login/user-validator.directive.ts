import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[coursesUserValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UserValidatorDirective,
      multi: true,
    }
  ]
})
export class UserValidatorDirective implements Validator {
  public validate({value}: FormControl): ValidationErrors | null {
    console.log(value)
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        'onlyLetters': 'Your field should contains only letters',
      };
  }
}
