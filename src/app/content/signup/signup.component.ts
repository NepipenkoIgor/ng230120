import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'courses-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, this.nameValidator]),
    password: new FormGroup({
      password: new FormControl(),
      cpassword: new FormControl(),
    }),
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

}
