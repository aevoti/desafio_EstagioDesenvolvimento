import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  _url = 'http://localhost:3000/info-weather';
  //PHP_API_SERVER = 'http://localhost/desafio_EstagioDesenvolvimento%20-%20back-end%20-%20php';

  constructor(private _http: HttpClient) {}

  public updateSearch: Subject<boolean> = new Subject();
  public updateWeatherSearch: Subject<any> = new Subject();

  //storeCurrentWeatherSearch(infoWeather: WeatherSearch){
  storeCurrentWeatherSearch(infoWeather: any){
    return this._http.post<any>(this._url, infoWeather).pipe(catchError(this.errorHandler)) //chama o método errorHandler
  }

  getPreviousWeatherSearches(){
    return this._http.get<any>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error); //retorna o erro
  }

  /*
  // --- PHP ---
  getPreviousWeatherSearches() {
    return this._http
      .get<any>(`${this.PHP_API_SERVER}/api/read.php`)
      .pipe(catchError(this.errorHandler));
  }

  storeCurrentWeatherSearch(infoWeather: any) {
    return this._http
      .post(`${this.PHP_API_SERVER}/api/create.php`, infoWeather)
      .pipe(catchError(this.errorHandler));
  }
  */


}
