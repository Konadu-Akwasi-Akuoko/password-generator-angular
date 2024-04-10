import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, retry, Subscription } from 'rxjs';
import zxcvbn from 'zxcvbn';

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService {
  includeUpperCase$ = new BehaviorSubject<boolean>(false);
  includeLowerCase$ = new BehaviorSubject<boolean>(false);
  includeNumbers$ = new BehaviorSubject<boolean>(false);
  includeSymbols$ = new BehaviorSubject<boolean>(false);
  passwordLength$ = new BehaviorSubject<number>(0);
  generatedPassword$ = new BehaviorSubject<string>('');
  passwordStrength$ = new BehaviorSubject<number>(1);

  private lowercaseChars: string;
  private uppercaseChars: string;
  private numbersChars: string;
  private symbolsChars: string;

  constructor() {
    this.lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbersChars = '0123456789';
    this.symbolsChars = `!@#$%^&*()_+-=[]{}|;:,.<>?"'`;
  }

  emptyState() {
    if (
      !this.includeLowerCase$.value &&
      !this.includeUpperCase$.value &&
      !this.includeNumbers$.value &&
      !this.includeSymbols$.value &&
      !this.passwordLength$.value
    ) {
      this.includeUpperCase$.next(false);
      this.includeLowerCase$.next(false);
      this.includeNumbers$.next(false);
      this.includeSymbols$.next(false);
      this.passwordLength$.next(0);
      this.generatedPassword$.next('');
      this.passwordStrength$.next(0);
    } else return;
  }

  checkPasswordStrength(password: string) {
    const passwordCheckResult = zxcvbn(password);
    const strength = Number(
      passwordCheckResult.score === 0 ? 1 : passwordCheckResult.score
    );
    this.passwordStrength$.next(strength);
  }

  private getRandomByte() {
    if (window.crypto?.getRandomValues) {
      const randomByte = new Uint8Array(1);
      window.crypto.getRandomValues(randomByte);
      return randomByte[0];
    }

    throw new Error(
      'Your browser does not support a secure way of generating random bytes.'
    );
  }

  generatePassword() {
    let charSet = '';
    let password = '';

    if (
      !this.includeUpperCase$.value &&
      !this.includeLowerCase$.value &&
      !this.includeNumbers$.value &&
      !this.includeSymbols$.value
    )
      return;

    if (this.includeUpperCase$.value) {
      charSet += this.uppercaseChars;
      password +=
        this.uppercaseChars[this.getRandomByte() % this.uppercaseChars.length];
    }
    if (this.includeLowerCase$.value) {
      charSet += this.lowercaseChars;
      password +=
        this.lowercaseChars[this.getRandomByte() % this.lowercaseChars.length];
    }
    if (this.includeNumbers$.value) {
      charSet += this.numbersChars;
      password +=
        this.numbersChars[this.getRandomByte() % this.numbersChars.length];
    }
    if (this.includeSymbols$.value) {
      charSet += this.symbolsChars;
      password +=
        this.symbolsChars[this.getRandomByte() % this.symbolsChars.length];
    }

    while (password.length < this.passwordLength$.value) {
      if (
        this.includeNumbers$.value &&
        !this.includeLowerCase$.value &&
        !this.includeUpperCase$.value &&
        !this.includeSymbols$.value
      ) {
        const char = String.fromCharCode(this.getRandomByte());
        if (charSet.indexOf(char) !== -1) {
          password += char;
        }
      } else {
        let char = String.fromCharCode(this.getRandomByte());
        do {
          char = String.fromCharCode(this.getRandomByte());
        } while (password.includes(char) || charSet.indexOf(char) === -1);
        password += char;
      }
    }

    password = password
      .split('')
      .sort(() => 0.5 - Math.random())
      .slice(0, this.passwordLength$.value)
      .join('');

    this.checkPasswordStrength(password);

    this.generatedPassword$.next(password);
  }

  setIncludeUpperCase(value: boolean) {
    this.includeUpperCase$.next(value);
    this.emptyState();
  }

  setIncludeNumbers(value: boolean) {
    this.includeNumbers$.next(value);
    this.emptyState();
  }

  setIncludeSymbols(value: boolean) {
    this.includeSymbols$.next(value);
    this.emptyState();
  }

  setPasswordLength(value: number) {
    this.passwordLength$.next(value);
    this.emptyState();
  }

  setIncludeLowerCase(value: boolean) {
    this.includeLowerCase$.next(value);
    this.emptyState();
  }
}
