import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurrentWeather } from '../../../app/data/models/ICurrentWeather';
import { CityService } from 'src/app/services/city.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-city-weather-detail',
  templateUrl: './city-weather-detail.component.html',
  styleUrls: ['./city-weather-detail.component.scss']
})
export class CityWeatherDetailComponent implements OnInit {

  @Input() city: ICurrentWeather;

  cityDetails: ICurrentWeather;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      this.cityDetails = this.city;
    } else {
      this._getCity(id);
    }
    console.log(this.cityDetails);
  }

  private _getCity(id: number): void {
    this.cityService.getCity(id)
      .subscribe({
        next: city => this.cityDetails = city,
        error: err => this.errorMessage = err
      })
  }

}
