import { Component, OnInit } from '@angular/core';
import initialCities from './models/initialCities.json';
import { ICurrentWeather } from './models/ICurrentWeather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cities: ICurrentWeather[] = initialCities;

  ngOnInit() {
    this.cities.map((city, index) => city.id = index);
    console.log(this.cities);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

}
