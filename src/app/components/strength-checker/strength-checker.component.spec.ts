import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCheckerComponent } from './strength-checker.component';
import { By } from '@angular/platform-browser';

describe('StrengthCheckerComponent', () => {
  let component: StrengthCheckerComponent;
  let fixture: ComponentFixture<StrengthCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthCheckerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrengthCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "STRENGTH"', () => {
    const titleElement = fixture.debugElement.query(
      By.css('.body')
    ).nativeElement;
    expect(titleElement.textContent).toBe('STRENGTH');
  });

  it('should have a subtitle "MEDIUM"', () => {
    const subtitleElement = fixture.debugElement.query(
      By.css('.heading-medium')
    ).nativeElement;
    expect(subtitleElement.textContent).toBe('MEDIUM');
  });

  it('should have four strength indicators', () => {
    const strengthIndicators = fixture.debugElement.queryAll(
      By.css('.h-7')
    );
    expect(strengthIndicators.length).toBe(4);
  });
});
