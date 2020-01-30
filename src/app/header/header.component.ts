import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input()
  public myTitle!: string;
  @Input()
  public d!: MatDrawer;

  toggleSidenav(): void {
    this.d.toggle();
  }

}
