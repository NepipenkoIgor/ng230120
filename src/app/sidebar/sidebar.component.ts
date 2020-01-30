import { Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'courses-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  @ContentChild('sampleContent', {static: false})
  public myContent: any;

  public ngOnInit() {
    console.log(this.myContent);
    this.setSidenavControl.emit(this.drawer);
  }

}
