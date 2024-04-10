import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { StrengthCheckerComponent } from '../strength-checker/strength-checker.component';
import { SliderComponent } from '../slider/slider.component';
import { PasswordGeneratorService } from '../../services/password-generator.service';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CheckboxComponent, StrengthCheckerComponent, SliderComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent implements OnInit, OnDestroy {
  generatedPassword: string;

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
}
