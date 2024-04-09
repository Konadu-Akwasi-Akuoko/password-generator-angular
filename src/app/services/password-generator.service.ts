import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService {
  includeUpperCase: Subject<boolean>;
  includeLowerCase: Subject<boolean>;
  includeNumbers: Subject<boolean>;
  includeSymbols: Subject<boolean>;
  passwordLength: Subject<number>;
  generatedPassword: Subject<string>;

  constructor() {
    this.includeUpperCase = new Subject();
    this.includeLowerCase = new Subject();
    this.includeNumbers = new Subject();
    this.includeSymbols = new Subject();
    this.passwordLength = new Subject();
    this.generatedPassword = new Subject();
  }
}
