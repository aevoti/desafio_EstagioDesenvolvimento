import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import initialCities from '../../models/initialCities.json';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.scss']
})
export class DesktopPageComponent implements OnInit {

  @ViewChild('search') searchElement: ElementRef;

  cities: ICurrentWeather[] = JSON.parse(localStorage.getItem('cities'));

  addIcon: string = '../../../assets/icons/add-24px.svg';
  logo: string = '../../../assets/icons/logo.svg';

  constructor() { }

  focusSearchBar() {
    this.searchElement.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
