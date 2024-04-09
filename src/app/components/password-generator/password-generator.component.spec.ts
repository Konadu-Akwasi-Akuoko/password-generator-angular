import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorComponent } from './password-generator.component';
import { By } from '@angular/platform-browser';

describe('PasswordGeneratorComponent', () => {
  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h1', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.textContent).toBe('Password Generator');
  });

  it('should have a password input field', () => {
    const passwordInput = fixture.debugElement.query(
      By.css('input[name="password"]')
    );
    expect(passwordInput).toBeTruthy();
  });

  it('should have a copy password button', () => {
    const copyButton = fixture.debugElement.query(
      By.css('button[title="Copy password"]')
    );
    expect(copyButton).toBeTruthy();
  });

  it('should have a label with text "Length"', () => {
    const labelElement = fixture.debugElement.query(
      By.css('label[for="length"]')
    );
    expect(labelElement.nativeElement.textContent).toContain('Length');
  });

  it('should have an input of type range', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input[type="range"]')
    );
    expect(inputElement).toBeTruthy();
  });

  it('should have a p element with class "heading-large text-neon-green w-fit" and text "10"', () => {
    const pElement = fixture.debugElement.query(
      By.css('p.heading-large.text-neon-green.w-fit')
    );
    expect(pElement.nativeElement.textContent).toContain('10');
  });
});