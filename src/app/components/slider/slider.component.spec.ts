import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { By } from '@angular/platform-browser';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label with text "Length"', () => {
    const labelElement = fixture.debugElement.query(
      By.css('label[for="length"]')
    );
    expect(labelElement.nativeElement.textContent).toContain('Length');
  });

  it('should have an input of type range', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input[type="range"]')
    );
    expect(inputElement).toBeTruthy();
  });

  it('should have a p element with class "heading-large text-neon-green w-fit" and text "10"', () => {
    const pElement = fixture.debugElement.query(
      By.css('p.heading-large.text-neon-green.w-fit')
    );
    expect(pElement.nativeElement.textContent).toContain('10');
  });
});
