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

  it('should have 4 checkboxes', () => {
    const checkboxes = fixture.debugElement.queryAll(
      By.css('input[type="checkbox"]')
    );
    expect(checkboxes.length).toBe(4);
  });

  it('checkboxes should have correct values', () => {
    const checkboxes = fixture.debugElement.queryAll(
      By.css('input[type="checkbox"]')
    );
    checkboxes.forEach((checkbox, index) => {
      expect(checkbox.nativeElement.checked).toBe(component.props[index].value);
    });
  });

  it('should have 4 labels', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    expect(labels.length).toBe(4);
  });

  it('labels should have correct text', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    labels.forEach((label, index) => {
      expect(label.nativeElement.textContent.trim()).toBe(
        component.props[index].label
      );
    });
  });
});
