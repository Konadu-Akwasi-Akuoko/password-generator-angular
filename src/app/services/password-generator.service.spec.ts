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
});
