import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoComponent } from './weather-info.component';

describe('WeatherInfoComponent', () => {
  let component: WeatherInfoComponent;
  let fixture: ComponentFixture<WeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
