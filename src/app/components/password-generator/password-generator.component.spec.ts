import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PasswordGeneratorComponent } from './password-generator.component';
import { By } from '@angular/platform-browser';
import { PasswordGeneratorService } from '../../services/password-generator.service';
import { of } from 'rxjs';

describe('PasswordGeneratorComponent', () => {
  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;
  let passwordGeneratorService: PasswordGeneratorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    passwordGeneratorService = TestBed.inject(PasswordGeneratorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h1', () => {
    const h1 = fixture.debugElement.query(By.css('h2'));
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

  it('Generate password button should be in the document', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('should call generatePassword when onGeneratePasswordClick is called', () => {
    spyOn(passwordGeneratorService, 'generatePassword');
    component.onGeneratePasswordClick();
    expect(passwordGeneratorService.generatePassword).toHaveBeenCalled();
  });
});
