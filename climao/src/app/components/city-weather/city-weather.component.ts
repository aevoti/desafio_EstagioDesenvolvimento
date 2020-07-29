import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  constructor() { }

  windIcon = '../../../assets/icons/wind.svg';
  arrowIcon = '../../../assets/icons/arrow.svg';

  @Input() cityWeather: ICurrentWeather;

  ngOnInit(): void {
  }

  printCityId(): void{
    console.log(this.cityWeather.id);
  }

  // getCities(): void{
  //   this.weatherService.getCurrentWeather('Beijing').subscribe(
  //     data => this.cityWeather = data,
  //     err => console.error(err),
  //     () => console.log(this.cityWeather)
  //   );
  // }

}
