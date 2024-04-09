import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PasswordGeneratorService } from '../../services/password-generator.service';
import { Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements OnInit, OnDestroy {
  props: { label: string; value: boolean; name: string }[];

  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;

  constructor(private passwordGeneratorService: PasswordGeneratorService) {
    this.includeUppercase = true;
    this.includeLowercase = true;
    this.includeNumbers = true;
    this.includeSymbols = false;

    this.props = [
      {
        label: 'Include Uppercase Letters',
        value: this.includeUppercase,
        name: 'includeUppercase',
      },
      {
        label: 'Include Lowercase Letters',
        value: this.includeLowercase,
        name: 'includeLowercase',
      },
      {
        label: 'Include Numbers',
        value: this.includeNumbers,
        name: 'includeNumbers',
      },
      {
        label: 'Include Symbols',
        value: this.includeSymbols,
        name: 'includeSymbols',
      },
    ];
  }

  ngOnInit(): void {
    this.passwordGeneratorService.includeUpperCase$.subscribe((value) => {
      this.includeUppercase = value;
    });
    this.passwordGeneratorService.setIncludeUpperCase(true);

    this.passwordGeneratorService.includeLowerCase$.subscribe((value) => {
      this.includeLowercase = value;
    });
    this.passwordGeneratorService.setIncludeLowerCase(true);

    this.passwordGeneratorService.includeNumbers$.subscribe((value) => {
      this.includeNumbers = value;
    });
    this.passwordGeneratorService.setIncludeNumbers(true);

    this.passwordGeneratorService.includeSymbols$.subscribe((value) => {
      this.includeSymbols = value;
    });
    this.passwordGeneratorService.setIncludeSymbols(false);
  }

  ngOnDestroy(): void {
    this.passwordGeneratorService.includeUpperCase$.unsubscribe();
    this.passwordGeneratorService.includeLowerCase$.unsubscribe();
    this.passwordGeneratorService.includeNumbers$.unsubscribe();
    this.passwordGeneratorService.includeSymbols$.unsubscribe();
  }

  onUpdatedCheckbox(index: number, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.checked;
    this.props[index].value = value;

    switch (index) {
      case 0:
        this.passwordGeneratorService.setIncludeUpperCase(value);
        break;
      case 1:
        this.passwordGeneratorService.setIncludeLowerCase(value);
        break;
      case 2:
        this.passwordGeneratorService.setIncludeNumbers(value);
        break;
      case 3:
        this.passwordGeneratorService.setIncludeSymbols(value);
        break;
    }
  }
}
