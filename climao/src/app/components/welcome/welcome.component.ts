import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { ICurrentWeather } from '../../models/ICurrentWeather';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  requestExample: ICurrentWeather = JSON.parse(`{
    "request": {
      "type": "IP",
      "query": "187.36.176.144",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Camburi",
      "country": "Brazil",
      "region": "Espirito Santo",
      "lat": "-20.267",
      "lon": "-40.267",
      "timezone_id": "America\/Sao_Paulo",
      "localtime": "2020-07-23 16:03",
      "localtime_epoch": 1595520180,
      "utc_offset": "-3.0"
    },
    "current": {
      "observation_time": "07:03 PM",
      "temperature": 26,
      "weather_code": 116,
      "weather_icons": [
        "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"
      ],
      "weather_descriptions": [
        "Partly cloudy"
      ],
      "wind_speed": 15,
      "wind_degree": 90,
      "wind_dir": "E",
      "pressure": 1019,
      "precip": 0,
      "humidity": 58,
      "cloudcover": 25,
      "feelslike": 28,
      "uv_index": 6,
      "visibility": 10,
      "is_day": "yes"
    }
  }`);
  cityWeather: ICurrentWeather = this.requestExample;

  constructor(private weatherService: CurrentWeatherService) {}

  ngOnInit(): void {
    // console.log(this.requestExample);
  }

  getData(): void{
    this.weatherService.getCurrentWeather('Beijing').subscribe(
      data => this.cityWeather = data,
      err => console.error(err),
      () => console.log(this.cityWeather)
    );
  }



}
