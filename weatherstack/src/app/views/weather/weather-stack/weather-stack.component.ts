import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWeatherStack } from 'src/app/shared/model/weatherstack.model';
import { ServerService } from 'src/app/shared/service/server.service';
import { WeatherstackService } from 'src/app/shared/service/weatherstack.service';

@Component({
  selector: 'app-weather-stack',
  templateUrl: './weather-stack.component.html',
  styleUrls: ['./weather-stack.component.css'],
})
export class WeatherStackComponent implements OnInit {

  searchWeatherPlace = '';
  public weather = [] as any;

  errorMsg!: string;

  thereIsError = false;
  thereIsWeather = false;

  constructor(
    private _weatherStackService: WeatherstackService,
    private _serverService: ServerService
  ) {}

  ngOnInit(): void {}

  searchWeather(searchEntry: any) {
    this.searchWeatherPlace = searchEntry.value.searchValue;
    this.getWeatherFromAPI();
  }

  getWeatherFromAPI() {
    this._weatherStackService
      .getWeather(this.searchWeatherPlace)
      .pipe(
        catchError((error) => {
          return of([]);
        })
      )
      .subscribe((data) => {
        this.weather = data;

        if (this.weather.error) {
          this.errorMsg = 'Error ' + ' - ' + this.weather.error.info;
          this.thereIsWeather = false;
          this.thereIsError = true;
        } else {
          this.thereIsError = false;
          this.thereIsWeather = true;
          this.submitDataWeather(data);
          this.treatData();
          this._serverService.updateSearch.next(this.thereIsWeather);
        }
      });
  }

  submitDataWeather(data: any) {
    this._serverService.storeCurrentWeatherSearch(data).subscribe(
      //(data) => console.log('Success!', data),
      //(error) => (this.errorMsg = error.statusText)
    );
  }

  treatData() {
    var arrarWeatherDescriptions = this.weather.current.weather_descriptions[0].split(',');
    this.weather.current.weather_descriptions = arrarWeatherDescriptions;

    var arrarWeatherIcons = this.weather.current.weather_icons[0].split(',');
    this.weather.current.weather_icons = arrarWeatherIcons;
  }

}
