import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements OnInit {
  @Input() props: { label: string; value: boolean; name: string };

  constructor() {
    this.props = { label: '', value: false, name: '' };
  }

  ngOnInit(): void {
    if (!this.props) {
      throw new Error('Label is required');
    }
  }
}
