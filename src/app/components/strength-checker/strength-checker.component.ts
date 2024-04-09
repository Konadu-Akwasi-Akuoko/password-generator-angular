import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-strength-checker',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './strength-checker.component.html',
  styleUrl: './strength-checker.component.css',
})
export class StrengthCheckerComponent {}
