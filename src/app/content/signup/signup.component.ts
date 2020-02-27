import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'courses-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, this.nameValidator],
      this.uniqNameValidator.bind(this)),
    emails: new FormArray([new FormControl('')]),
    password: new FormGroup({
      password: new FormControl(),
      cpassword: new FormControl(),
    }, this.equalValidator),
  });

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.signupForm.valueChanges.subscribe(() => {
      console.log('Changed');
    });
    setTimeout(() => {
      this.signupForm.get('password')?.get('password')?.setErrors({'initial err': true});
      this.signupForm.patchValue({username: 'inepipenko'}, {emitEvent: false});
    }, 5000);
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public signUp(info: any) {
    console.log(info);
  }

  public nameValidator({value}: FormControl): ValidationErrors | null {
    console.log(value);
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        'onlyLetters': 'Your field should contains only letters',
      };
  }

  public equalValidator(control: AbstractControl): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password !== cpassword
      ? {
        'equal': 'Fields are not equal',
      }
      : null;
  }

  public uniqNameValidator({value: username}: AbstractControl): Observable<ValidationErrors | null> {
    const isValid = username === 'inepipenko' ? null : {'name is not uniq': true};
    return of(isValid)
      .pipe(delay(5000));
    // this.http.post('/auth/checkUsername', {username})
    //   .pipe(
    //     catchError(() => {
    //       return of(null);
    //     })
    //   );
  }

  public getControls(control: AbstractControl, path: string): AbstractControl[] {
    return (control.get(path) as FormArray).controls;
  }

  public addEmail() {
    (this.signupForm.get('emails') as FormArray).push(new FormControl());
  }

  public removeEmail(index: number) {
    (this.signupForm.get('emails') as FormArray).removeAt(index);
  }
}
