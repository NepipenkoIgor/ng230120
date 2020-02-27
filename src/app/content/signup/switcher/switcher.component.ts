import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'courses-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true,
    },
  ],
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked = false;
  public onChangeCb!: (checked: boolean) => void;

  @HostListener('click')
  public toggle() {
    this.checked = !this.checked;
    this.onChangeCb(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(_fn: any): void {
  }
}
