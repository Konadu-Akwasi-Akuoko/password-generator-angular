import { TestBed } from '@angular/core/testing';
import { PasswordGeneratorService } from './password-generator.service';
import { skip } from 'rxjs';

describe('PasswordGeneratorService', () => {
  let service: PasswordGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set includeUpperCase$', (done) => {
    service.includeUpperCase$.pipe(skip(1)).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
    service.setIncludeUpperCase(true);
  });

  it('should set includeLowerCase$', (done) => {
    service.includeLowerCase$.pipe(skip(1)).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
    service.setIncludeLowerCase(true);
  });

  it('should set includeNumbers$', (done) => {
    service.includeNumbers$.pipe(skip(1)).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
    service.setIncludeNumbers(true);
  });

  it('should set includeSymbols$', (done) => {
    service.includeSymbols$.pipe(skip(1)).subscribe((value) => {
      expect(value).toBeTrue();
      done();
    });
    service.setIncludeSymbols(true);
  });

  it('should set passwordLength$', (done) => {
    service.passwordLength$.pipe(skip(1)).subscribe((value) => {
      expect(value).toEqual(10);
      done();
    });
    service.setPasswordLength(10);
  });

  it('should generate a password of the correct length', () => {
    service.setPasswordLength(10);
    service.setIncludeLowerCase(true);
    service.setIncludeUpperCase(true);
    service.setIncludeNumbers(true);
    service.setIncludeSymbols(true);
    service.generatePassword();
    expect(service.generatedPassword$.value.length).toEqual(10);
  });

  it('should include uppercase characters when includeUpperCase$ is true', () => {
    service.setPasswordLength(10);
    service.setIncludeUpperCase(true);
    service.setIncludeLowerCase(false);
    service.setIncludeNumbers(false);
    service.setIncludeSymbols(false);
    service.generatePassword();
    expect(service.generatedPassword$.value).toMatch(/[A-Z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[a-z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[0-9]/);
    expect(service.generatedPassword$.value).not.toMatch(
      /[!@#\$%\^&*\(\)_\+\-=\[\]{}|;:,.<>?"]/
    );
  });

  // should include lowercase characters when includeLowerCase$ is true
  it('should include lowercase characters when includeLowerCase$ is true', () => {
    service.setPasswordLength(10);
    service.setIncludeUpperCase(false);
    service.setIncludeLowerCase(true);
    service.setIncludeNumbers(false);
    service.setIncludeSymbols(false);
    service.generatePassword();
    expect(service.generatedPassword$.value).toMatch(/[a-z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[A-Z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[0-9]/);
    expect(service.generatedPassword$.value).not.toMatch(
      /[!@#\$%\^&*\(\)_\+\-=\[\]{}|;:,.<>?"]/
    );
  });

  // should include numbers when includeNumbers$ is true
  it('should include numbers when includeNumbers$ is true', () => {
    service.setPasswordLength(10);
    service.setIncludeUpperCase(false);
    service.setIncludeLowerCase(false);
    service.setIncludeNumbers(true);
    service.setIncludeSymbols(false);
    service.generatePassword();
    expect(service.generatedPassword$.value).toMatch(/[0-9]/);
    expect(service.generatedPassword$.value).not.toMatch(/[A-Z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[a-z]/);
    expect(service.generatedPassword$.value).not.toMatch(
      /[!@#\$%\^&*\(\)_\+\-=\[\]{}|;:,.<>?"]/
    );
  });

  // should include symbols when includeSymbols$ is true
  it('should include symbols when includeSymbols$ is true', () => {
    service.setPasswordLength(10);
    service.setIncludeUpperCase(false);
    service.setIncludeLowerCase(false);
    service.setIncludeNumbers(false);
    service.setIncludeSymbols(true);
    service.generatePassword();
    expect(service.generatedPassword$.value).toMatch(
      /[!@#\$%\^&*\(\)_\+\-=\[\]{}|;:,.<>?"]/
    );
    expect(service.generatedPassword$.value).not.toMatch(/[A-Z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[a-z]/);
    expect(service.generatedPassword$.value).not.toMatch(/[0-9]/);
  });
});
