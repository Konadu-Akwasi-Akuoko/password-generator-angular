import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService implements OnDestroy {
  includeUpperCase$ = new BehaviorSubject<boolean>(false);
  includeLowerCase$ = new BehaviorSubject<boolean>(false);
  includeNumbers$ = new BehaviorSubject<boolean>(false);
  includeSymbols$ = new BehaviorSubject<boolean>(false);
  passwordLength$ = new BehaviorSubject<number>(0);
  generatedPassword$ = new BehaviorSubject<string>('');

  private lowercaseChars: string;
  private uppercaseChars: string;
  private numbersChars: string;
  private symbolsChars: string;

  private subscriptions: Subscription[] = [];

  constructor() {
    this.subscriptions.push(
      this.includeUpperCase$.subscribe(),
      this.includeLowerCase$.subscribe(),
      this.includeNumbers$.subscribe(),
      this.includeSymbols$.subscribe(),
      this.passwordLength$.subscribe()
    );

    this.lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbersChars = '0123456789';
    this.symbolsChars = `!@#$%^&*()_+-=[]{}|;:,.<>?"'`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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

    if (this.includeUpperCase$.value) charSet += this.uppercaseChars;
    if (this.includeLowerCase$.value) charSet += this.lowercaseChars;
    if (this.includeNumbers$.value) charSet += this.numbersChars;
    if (this.includeSymbols$.value) charSet += this.symbolsChars;

    let password = '';

    while (password.length < this.passwordLength$.value) {
      const char = String.fromCharCode(this.getRandomByte());
      if (charSet.indexOf(char) !== -1) {
        password += char;
      }
    }

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
