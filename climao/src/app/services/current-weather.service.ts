import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../models/ICurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://api.weatherstack.com/current';

  getCurrentWeather(location: string): Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeather>(this.baseUrl, {
      params: {
        access_key: environment.access_key,
        query: location
      }
    });
  }
}
