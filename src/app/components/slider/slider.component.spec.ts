import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { By } from '@angular/platform-browser';
import { PasswordGeneratorService } from '../../services/password-generator.service';
import { of } from 'rxjs';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let passwordGeneratorService: PasswordGeneratorService;

  beforeEach(() => {
    const passwordGeneratorServiceMock = {
      passwordLength$: of(10),
      setPasswordLength: jasmine.createSpy('setPasswordLength'),
    };

    passwordGeneratorService = passwordGeneratorServiceMock as any;
    component = new SliderComponent(passwordGeneratorService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setPasswordLength with correct value when updateSliderValue is called', () => {
    const event = {
      target: { value: '5' },
    } as any as InputEvent;

    component.updateSliderValue(event);

    expect(passwordGeneratorService.setPasswordLength).toHaveBeenCalledWith(5);
  });
});
