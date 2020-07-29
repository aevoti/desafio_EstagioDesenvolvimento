import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';

@Component({
  selector: 'app-city-weather-list',
  templateUrl: './city-weather-list.component.html',
  styleUrls: ['./city-weather-list.component.scss']
})
export class CityWeatherListComponent implements OnInit {

  cities: ICurrentWeather[] = JSON.parse(localStorage.getItem('cities'));

  constructor() { }

  ngOnInit(): void {
  }

}
