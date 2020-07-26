import { Component } from '@angular/core';
import initialCities from'./models/initialCities.json';
import { ICurrentWeather } from './models/ICurrentWeather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cities: ICurrentWeather[] = initialCities;

}
