import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {

  @Input()
  public myTitle!: string;
  @Input()
  public d!: MatDrawer;

  public constructor() {
    console.log('constructor');
    console.log(this.myTitle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {

    console.log('OnInit');
    console.log(this.myTitle);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  toggleSidenav(): void {
    this.d.toggle();
  }

}
