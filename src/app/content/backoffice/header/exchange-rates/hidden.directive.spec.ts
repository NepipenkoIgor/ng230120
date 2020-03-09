import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
    <div coursesHidden #control="coursesHidden"></div>
    <span class="hide" (click)="control.hide()"></span>
    <span class="show" (click)="control.show()"></span>
  `
})
class TestComponent {

}


describe('Hidden directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });
  it('should show and hide element', () => {
    const element = fixture.debugElement.query(By.directive(HiddenDirective));
    const hideBtn = fixture.debugElement.query(By.css('.hide'));
    const showBtn = fixture.debugElement.query(By.css('.show'));
    expect(element).toBeTruthy();
    expect(hideBtn).toBeTruthy();
    expect(showBtn).toBeTruthy();
    hideBtn.triggerEventHandler('click', null);
    expect(element.styles.visibility).toEqual('hidden');
    showBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('visible');
  });
});
