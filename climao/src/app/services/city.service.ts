import { Injectable } from '@angular/core';
import { ICurrentWeather } from '../data/models/ICurrentWeather';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cityUrl = 'api/cities';

  private citiesLengthSource = new Subject<number>();
  citiesLengthSource$ = this.citiesLengthSource.asObservable();

  constructor(private http: HttpClient) {}

  changeCitiesLengthSource(citiesLength: number): void {
    this.citiesLengthSource.next(citiesLength);
  }

  getCities(): Observable<ICurrentWeather[]> {
    return this.http.get<ICurrentWeather[]>(this.cityUrl).pipe(
      // tap(data => console.log(data)),
      catchError(this._handleError)
    );
  }

  getCity(cityId: number): Observable<ICurrentWeather | undefined> {
    const url = `${this.cityUrl}/${cityId}`;
    return this.http.get<ICurrentWeather>(url)
      .pipe(
          // tap(data => console.log(data)),
          catchError(this._handleError)
        );
  }

  saveCity(newCity: ICurrentWeather): Observable<ICurrentWeather> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    newCity.id = null;
    return this.http.post<ICurrentWeather>(this.cityUrl, newCity, { headers: headers })
      .pipe(
        // tap(data => console.log(data)),
        catchError(this._handleError)
        );
      }

  // deleteCity(cityId: number): Observable<{}> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.delete<ICurrentWeather>(`${this.cityUrl}/${cityId}`, { headers: headers })
  //     .pipe(
  //       // tap(data => console.log('deleteProduct: ', data)),
  //       catchError(this._handleError)
  //     );
  // }

  private _handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
