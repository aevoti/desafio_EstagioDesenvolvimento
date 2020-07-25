import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  constructor() { }

  windIcon = '../../../assets/icons/wind.svg';
  arrowIcon = '../../../assets/icons/arrow.svg';

  ngOnInit(): void {
  }

}
