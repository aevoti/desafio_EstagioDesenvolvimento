import { Component, OnInit } from '@angular/core';

import initialCities from '../../models/initialCities.json';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.scss']
})
export class MobilePageComponent implements OnInit {

  cities: ICurrentWeather[] = initialCities;

  constructor() { }

  ngOnInit(): void {
  }

}
