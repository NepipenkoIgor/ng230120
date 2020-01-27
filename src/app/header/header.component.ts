import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input()
  public t!: string;

  constructor() {
  }

  ngOnInit() {
  }

}
