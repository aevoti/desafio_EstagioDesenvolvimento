import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherDetailComponent } from './city-weather-detail.component';

describe('CityWeatherDetailComponent', () => {
  let component: CityWeatherDetailComponent;
  let fixture: ComponentFixture<CityWeatherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
