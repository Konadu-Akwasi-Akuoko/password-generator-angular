import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a checkbox input', () => {
    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    );
    expect(checkbox).toBeTruthy();
  });

  it('should have a label with text "Test box"', () => {
    const label = fixture.debugElement.query(By.css('label'));
    expect(label.nativeElement.textContent).toBe(' Include Uppercase Letters ');
  });

  it('should have a value of false', () => {
    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    );
    expect(checkbox.nativeElement.checked).toBeTrue();
  });
});
