import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from './weather';

const accesKey = '8c7a9019b221f711e59cfd54eec74859';

@Injectable({
	providedIn: 'root'
})

export class WeatherstackService {

	constructor(private http: HttpClient) { }

	getWeather(city: string): Observable<Weather> {
		return this.http.get<Weather>(
			`http://api.weatherstack.com/current?access_key=${accesKey}&query=${city}`
		);
	}
}
