import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStackComponent } from './weather-stack.component';

describe('WeatherStackComponent', () => {
  let component: WeatherStackComponent;
  let fixture: ComponentFixture<WeatherStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
