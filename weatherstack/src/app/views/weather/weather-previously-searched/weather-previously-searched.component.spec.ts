import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPreviouslySearchedComponent } from './weather-previously-searched.component';

describe('WeatherPreviouslySearchedComponent', () => {
  let component: WeatherPreviouslySearchedComponent;
  let fixture: ComponentFixture<WeatherPreviouslySearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPreviouslySearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPreviouslySearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
