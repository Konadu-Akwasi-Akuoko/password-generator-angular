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
  passwordStrength$ = new BehaviorSubject<number>(0);

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

  checkPasswordStrength(password: string) {
    const strength = zxcvbn(password);
    return strength.score === 0 ? 1 : strength.score;
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
  }

  setIncludeLowerCase(value: boolean) {
    this.includeLowerCase$.next(value);
  }

  setIncludeNumbers(value: boolean) {
    this.includeNumbers$.next(value);
  }

  setIncludeSymbols(value: boolean) {
    this.includeSymbols$.next(value);
  }

  setPasswordLength(value: number) {
    this.passwordLength$.next(value);
  }
}
