import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { MatDrawer } from '@angular/material';

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

  @ContentChild('sampleContent', {static: false})
  public myContent!: TemplateRef<any>;
  @ViewChild('viewContent', {read: ViewContainerRef, static: false})
  public myView!: ViewContainerRef;

  public ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }

  public ngAfterContentInit(): void {
    console.log(this.myContent);
  }

  public ngAfterViewInit(): void {
    this.myView.createEmbeddedView(this.myContent);
  }
}
