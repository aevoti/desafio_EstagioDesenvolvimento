import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../models/icurrent-weather';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {

    constructor(private httpclient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders('Access-Control-Allow-Origin')
    }

    getCurrentWeather(location: string): Observable<any> {
        const params = {
            'access_key': environment.access_key,
            'query': location
        }

        return this.httpclient.get<any>(`${environment.apiURL}/current`, { params: params },)
            .pipe(
                // retry(1),
                catchError(this.handleError)
            )

    }


    // Manipulação de erros
    handleError(response: HttpErrorResponse) {
        let errorMessage = '';
        if (response.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = response.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${response.status}, ` + `mensagem: ${response.error.error}`;
            alert(response.error.error);
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
}
