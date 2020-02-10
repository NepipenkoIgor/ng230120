import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild, ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild, ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'courses-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  @ContentChild('sampleContent')
  public myContent!: TemplateRef<any>;
  @ViewChild('viewContent', { read: ViewContainerRef })
  public myView!: ViewContainerRef;

  public constructor(private el: ElementRef) {

  }

  public ngOnInit() {
    console.log(this.el);
    this.setSidenavControl.emit(this.drawer);
  }

  public ngAfterContentInit(): void {
    console.log(this.myContent);
  }

  public ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.myView.createEmbeddedView(this.myContent, {
        $implicit: 'Implicit Title',
        subTitle: 'MY subtitle',
      });
    });

  }
}

// console.log('start');
// setTimeout(() => console.log('timeout 1'));
// setTimeout(() => console.log('timeout 2'));
// Promise.resolve().then(() => console.log('promise 1'));
// Promise.resolve().then(() => console.log('promise 2'));
// console.log('end');

// ---console.log('start') --- console.log('timeout 1') --- console.log('timeout 2')
//    console.log('end');
//
//    console.log('promise 1')
//    console.log('promise 2')
