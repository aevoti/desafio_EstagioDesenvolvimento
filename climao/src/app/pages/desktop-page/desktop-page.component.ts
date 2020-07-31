import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';

import { ICurrentWeather } from 'src/app/data/models/ICurrentWeather';
import { CityService } from 'src/app/services/city.service';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.scss']
})
export class DesktopPageComponent implements OnInit {

  @ViewChild('search') searchElement: ElementRef;

  cities: ICurrentWeather[];
  errorMessage: string;

  addIcon: string = '../../../assets/icons/add-24px.svg';
  logo: string = '../../../assets/icons/logo.svg';

  constructor(private weatherService: CurrentWeatherService,
    private cityService: CityService) { }

  ngOnInit(): void {
    this._getCities();
    this.cityService.citiesLengthSource$.subscribe({
      next: (data) => {
        if (this.cities.length !== data) {
          this._getCities()
        }
      }
    })
  }

  focusSearchBar() {
    this.searchElement.nativeElement.focus();
  }

  onSubmit(form) {
    const cityName = form.value.inputCity;
    this.weatherService.getCurrentWeather(cityName).subscribe({
      next: (data) => this._saveCity(data),
      error: (err) => console.error(err),

    });
  }

  private _saveCity(city: ICurrentWeather) {
    this.cityService.saveCity(city).subscribe({
      error: (err) => console.error(err),
      complete: () => this._getCities()
    })
  }

  private _getCities() {
    this.cityService.getCities().subscribe({
      next: cities => this.cities = cities,
      error: err => this.errorMessage = err
    });
  }

}
