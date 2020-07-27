import { Component, OnInit } from '@angular/core';

// import initialCities from '../../models/initialCities.json';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.scss']
})
export class DesktopPageComponent implements OnInit {

  // cities: ICurrentWeather[] = initialCities;

  addIcon: string = '../../../assets/icons/add-24px.svg';
  logo: string = '../../../assets/icons/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
