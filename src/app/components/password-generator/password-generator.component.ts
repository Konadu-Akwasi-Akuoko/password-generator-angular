import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { StrengthCheckerComponent } from '../strength-checker/strength-checker.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CheckboxComponent, StrengthCheckerComponent, SliderComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent {
  constructor() {}
}
