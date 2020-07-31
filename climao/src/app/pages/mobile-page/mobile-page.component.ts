import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';
import { ICurrentWeather } from 'src/app/data/models/ICurrentWeather';
import { CityService } from 'src/app/services/city.service';
import { NgForm } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.scss']
})
export class MobilePageComponent implements OnInit {

  citiesLength: number;

  constructor(private route: ActivatedRoute,
    private weatherService: CurrentWeatherService,
    private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().subscribe({
      next: (data) => this.citiesLength = data.length
    })
  }

  hasCityId(): boolean{
    return this.route.firstChild.snapshot.paramMap.has('id');
  }

  onSubmit(form: NgForm) {
    const cityName = form.value.inputCity;
    if (cityName === '') {
      return;
    }
    this.weatherService.getCurrentWeather(cityName).subscribe({
      next: (data) => this._saveCity(data),
      error: (err) => console.error(err),
    });
  }


  _saveCity(city: ICurrentWeather) {
    this.cityService.saveCity(city).subscribe({
      error: (err) => console.error(err),
      complete: () => {
        this.citiesLength = this.citiesLength + 1;
        this.cityService.changeCitiesLengthSource(this.citiesLength);
      }
    });
  }

}
