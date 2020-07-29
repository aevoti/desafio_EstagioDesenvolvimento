import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherListComponent } from './city-weather-list.component';

describe('CityWeatherListComponent', () => {
  let component: CityWeatherListComponent;
  let fixture: ComponentFixture<CityWeatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
