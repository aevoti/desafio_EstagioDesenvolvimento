import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWeatherStack } from '../model/weatherstack.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  private _url: string ="http://api.weatherstack.com/current?access_key=b6fe9392caadf6b36ed6b142ba8d50e7&query=";

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<IWeatherStack[]> {
    var sendUrl = this._url + location;
    return this.http
            .get<IWeatherStack[]>(sendUrl)
            .pipe(
                catchError(error => {
                    return throwError(error);
                })
            );
  }



}
