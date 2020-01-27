import { Component } from '@angular/core';

@Component({
  selector: 'course-root#test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ng230120';
  private _salary = 3000;
  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  public imgWidth = 100;
  public account!: { name: string, age: number };

  constructor() {
  }

  public getsSalary(bonuses: number) {
    return `${Math.round(bonuses * this._salary)}RUB`;
  }

  public getWidth(image: HTMLImageElement): void {
    console.log(image);
  }

  public search(imgWidth: number, {value}: HTMLInputElement) {
    console.log(imgWidth, value);
  }
}
