import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { WeatherstackService } from '../weatherstack.service';
import { Weather } from '../weather';

@Component({
	selector: 'app-weather-info',
	templateUrl: './weather-info.component.html',
	styleUrls: ['./weather-info.component.css']
})

export class WeatherInfoComponent implements OnInit {
	semana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	weatherData: Weather;

	constructor(
		private weatherService: WeatherstackService,
		private route: ActivatedRoute,
		private routeNav: Router
	) {
		this.routeNav.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.weatherService.getWeather(this.route.snapshot.queryParamMap.get('city')).subscribe(data => {
					if (!data.error) {
						this.weatherData = data;
					} else {
						this.routeNav.navigate(['/error'], { queryParams: { code: data.error.code, type: data.error.type }, skipLocationChange: true });
					}
				});
			}
		})
	}

	ngOnInit() {
	}

	getLocalTime(localDateTime: string): string {
		let local = localDateTime.split(' ');
		let localDateSplit = local[0].split('-');
		let localDate = new Date(parseInt(localDateSplit[0]), parseInt(localDateSplit[1])-1, parseInt(localDateSplit[2]));
		return `${this.semana[localDate.getDay()]}, ${local[1]}`;
	}
}
