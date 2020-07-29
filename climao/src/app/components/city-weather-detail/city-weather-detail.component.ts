import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from 'src/app/models/ICurrentWeather';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather-detail',
  templateUrl: './city-weather-detail.component.html',
  styleUrls: ['./city-weather-detail.component.scss']
})
export class CityWeatherDetailComponent implements OnInit {

  @Input() city: ICurrentWeather ;
  cityDetails: ICurrentWeather;

  pinIcon: string = '../../../assets/icons/push_pin-24px.svg';
  deleteIcon: string = '../../../assets/icons/delete-24px.svg';
  addIcon: string = '../../../assets/icons/add-24px.svg';
  clockIcon: string = '../../../assets/icons/access_time-24px.svg';
  windIcon: string = '../../../assets/icons/wind.svg';
  waterIcon: string = '../../../assets/icons/drop.svg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.city) {
      this.cityDetails = this.city;
    } else {
      const cityId = this.route.snapshot.paramMap.get('id');
      const cities = JSON.parse(localStorage.getItem('cities'));
      this.cityDetails = cities[cityId];
    }
  }

}
