import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { ICurrentWeather } from 'src/app/data/models/ICurrentWeather';
import { CityService } from 'src/app/services/city.service';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';

@Component({
  selector: 'app-city-weather-list',
  templateUrl: './city-weather-list.component.html',
  styleUrls: ['./city-weather-list.component.scss']
})
export class CityWeatherListComponent implements OnInit {

  cities: ICurrentWeather[];
  hasNewCity: boolean = false;

  constructor(private citiesService: CityService, private weatherService: CurrentWeatherService) { }

  ngOnInit() {
    this.getCities();
    this.citiesService.citiesLengthSource$.subscribe({
      next: (data) => {
        if (data !== this.cities.length){
          this.getCities()
        }
      }
    })
  }

  getCities() {
    this.citiesService.getCities().subscribe({
      next: cities => this.cities = cities,
      error: err => console.error(err)
    });
  }
}
