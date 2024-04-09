import { TestBed } from '@angular/core/testing';

import { PasswordGeneratorService } from './password-generator.service';

describe('PasswordGeneratorService', () => {
  let service: PasswordGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
