import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

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

  it('should copy the password to the clipboard and set onPasswordCopied to true, then false after 2 seconds', fakeAsync(() => {
    spyOn(navigator.clipboard, 'writeText');
    component.generatedPassword = 'test-password';

    component.onCopyButtonClicked();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test-password');
    expect(component.onPasswordCopied).toBeTrue();

    tick(2000);

    expect(component.onPasswordCopied).toBeFalse();
  }));

  
});
