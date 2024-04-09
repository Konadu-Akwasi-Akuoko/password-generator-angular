import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent {
  props: { label: string; value: boolean; name: string }[];

  constructor() {
    this.props = [
      {
        label: 'Include Uppercase Letters',
        value: true,
        name: 'haveUppercase',
      },
      {
        label: 'Include Lowercase Letters',
        value: true,
        name: 'haveLowercase',
      },
      { label: 'Include Numbers', value: true, name: 'haveNumbers' },
      { label: 'Include Symbols', value: false, name: 'haveSymbols' },
    ];
  }
}
