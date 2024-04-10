import { UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PasswordGeneratorService } from '../../services/password-generator.service';

@Component({
  selector: 'app-strength-checker',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './strength-checker.component.html',
  styleUrl: './strength-checker.component.css',
})
export class StrengthCheckerComponent implements OnInit, OnDestroy {
  passwordStrength: number = 1;

  constructor(private passwordGeneratorService: PasswordGeneratorService) {}

  ngOnInit(): void {
    this.passwordGeneratorService.passwordStrength$.subscribe((value) => {
      this.passwordStrength = value;
    });
  }

  ngOnDestroy(): void {
    this.passwordGeneratorService.passwordStrength$.unsubscribe();
  }
}
