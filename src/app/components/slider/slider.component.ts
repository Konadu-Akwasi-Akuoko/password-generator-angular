import { Component, OnDestroy, OnInit } from '@angular/core';
import { PasswordGeneratorService } from '../../services/password-generator.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit, OnDestroy {
  sliderValue: number;

  constructor(private passwordGeneratorService: PasswordGeneratorService) {
    this.sliderValue = 0;
  }

  ngOnInit(): void {
    this.passwordGeneratorService.passwordLength.subscribe((value) => {
      this.sliderValue = value;
    });
    this.passwordGeneratorService.setPasswordLength(10);
  }

  ngOnDestroy(): void {
    this.passwordGeneratorService.passwordLength.unsubscribe();
  }

  updateSliderValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.passwordGeneratorService.setPasswordLength(Number(target.value));
  }
}
