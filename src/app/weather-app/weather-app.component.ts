import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICurrentWeather } from '../shared/models/icurrent-weather';
import { ILocationData } from '../shared/models/ilocation-data';
import { WeatherApiService } from '../services/weather-api.service'
import {
    faWind,
    faCloudShowersHeavy,
    faLocationArrow,
    faSmog,
    faSun,
    faTemperatureLow,
    faTint,
    faCompass,
    faCloudRain,
    faCloudSunRain,
    faSnowflake,
    faCloud,
    faBolt,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


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

    pressureIcon = faCompass;
    windIcon = faWind;
    directionIcon = faLocationArrow;
    rainIcon = faCloudShowersHeavy;
    visibilityIcon = faSmog;
    uvIcon = faSun;
    feelsLikeIcon = faTemperatureLow;
    humidityIcon = faTint;
    weatherIcon: IconDefinition;

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            region: [null],
        })
    }

    getCurrentWeather() {
        this.weatherApiService.getCurrentWeather(this.form.get('region').value)
            .subscribe(response => {
                this.locationData = response.location;
                const current = response.current;
                this.currentWeather = {
                    observationTime: current.observation_time,
                    temperature: current.temperature,
                    code: current.weather_code,
                    description: current.weather_descriptions,
                    windSpeed: current.wind_speed,
                    windDegree: current.wind_degree,
                    windDirection: current.wind_dir,
                    pressure: current.pressure,
                    preciptation: current.precip,
                    humidity: current.humidity,
                    cloudCover: current.cloudover,
                    feelsLike: current.feelslike,
                    uvIndex: current.uv_index,
                    visibility: current.visibility,
                    isDay: current.is_day === 'yes',
                }
                console.log(this.currentWeather.code)
                this.setWeatherIcon(this.currentWeather.code);
            })
    }

    setWeatherIcon(weatherCode: number) {
        if (weatherCode === 113) {
            this.weatherIcon = faSun;
        }
        if (weatherCode === 116) {
            this.weatherIcon = faCloudSun;
        }
        if (weatherCode === 119 || weatherCode === 112) {
            this.weatherIcon = faCloud;
        }
        if (weatherCode === 143 || weatherCode === 248 || weatherCode === 260) {
            this.weatherIcon = faSmog;
        }
        if (weatherCode > 143 && weatherCode < 200) {
            this.weatherIcon = faCloudSunRain;
        }
        if (weatherCode === 200) {
            this.weatherIcon = faBolt;
        }
        if (weatherCode === 227 || weatherCode === 230) {
            this.weatherIcon = faSnowflake;
        }
        if (weatherCode > 260) {
            this.weatherIcon = faCloudRain;
        }
    }
}
