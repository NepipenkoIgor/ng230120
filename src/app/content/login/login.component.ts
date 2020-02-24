import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'courses-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public firstName = new FormControl('Ihor', []);

  constructor() {
  }

  ngOnInit(): void {
  }

  public login(info: { firstName: string, password: string }) {
    console.log(info);
  }

}
