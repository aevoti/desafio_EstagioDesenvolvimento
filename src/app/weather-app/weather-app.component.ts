import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICurrentWeather } from '../models/icurrent-weather';
import { ILocationData } from '../models/ilocation-data';
import { WeatherApiService } from '../services/weather-api.service'


@Component({
    selector: 'weather-app',
    templateUrl: './weather-app.component.html',
    styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

    constructor(private weatherApiService: WeatherApiService,
        private formBuilder: FormBuilder) { }

    form: FormGroup;
    locationData: ILocationData;
    currentWeather: ICurrentWeather;

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            region: [null],
        })

        this.locationData = {
            country: "United States of America",
            lat: 40.714,
            localtime: "2021-01-26 18:19",
            lon: -74.006,
            name: "New York",
            region: "New York",
            timezone_id: "America/New_York",
            utc_offset: -5.0,
        }

        this.currentWeather = {
            observationTime: "11:12 PM",
            temperature: 26,
            code: 296,
            description: "Light Rain, Mist",
            windSpeed: 10,
            windDegree: 70,
            windDirection: "ENE",
            pressure: 1013,
            preciptation: 2.5,
            humidity: 92,
            cloudCover: 100,
            feelsLike: -3,
            uvIndex: 1,
            visibility: 3,
            isDay: true,
        }
    }

    getCurrentWeather() {
        // this.weatherApiService.getCurrentWeather(this.form.get('region').value)
        //     .subscribe(response => {
        //         this.locationData = response.location;
        //         const current = response.current;
        //         this.currentWeather = {
        //             observationTime: current.observation_time,
        //             temperature: current.temperature,
        //             code: current.weather_code,
        //             description: current.weather_descriptions,
        //             windSpeed: current.wind_speed,
        //             windDegree: current.wind_degree,
        //             windDirection: current.wind_dir,
        //             pressure: current.pressure,
        //             preciptation: current.precip,
        //             humidity: current.humidity,
        //             cloudCover: current.cloudover,
        //             feelsLike: current.feelslike,
        //             uvIndex: current.uv_index,
        //             visibility: current.visibility,
        //             isDay: current.is_day === 'yes',
        //         }
        //     })

    }

}
