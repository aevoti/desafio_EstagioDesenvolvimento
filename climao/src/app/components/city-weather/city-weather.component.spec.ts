import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherComponent } from './city-weather.component';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
