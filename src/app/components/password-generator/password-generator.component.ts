import { UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PasswordGeneratorService } from '../../services/password-generator.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SliderComponent } from '../slider/slider.component';
import { StrengthCheckerComponent } from '../strength-checker/strength-checker.component';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [
    CheckboxComponent,
    StrengthCheckerComponent,
    SliderComponent,
    UpperCasePipe,
  ],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent implements OnInit, OnDestroy {
  generatedPassword: string;
  onPasswordCopied: boolean = false;

  constructor(private passwordGeneratorService: PasswordGeneratorService) {
    this.generatedPassword = '';
  }

  ngOnInit(): void {
    this.passwordGeneratorService.generatedPassword$.subscribe((password) => {
      this.generatedPassword = password;
    });
  }

  ngOnDestroy(): void {
    this.passwordGeneratorService.generatedPassword$.unsubscribe();
  }

  onGeneratePasswordClick() {
    this.passwordGeneratorService.generatePassword();
  }

  onCopyButtonClicked() {
    navigator.clipboard.writeText(this.generatedPassword);
    this.onPasswordCopied = true;
    setTimeout(() => {
      this.onPasswordCopied = false;
    }, 2000);
  }
}
