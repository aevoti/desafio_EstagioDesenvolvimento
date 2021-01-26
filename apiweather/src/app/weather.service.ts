import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  acess_key: string ="0785c4ab23bf4a84359cf0688f124bae";
  
  constructor(private http: HttpClient) {

  }

  getWeatherDataByCity(city: string, state: string, unit: string) {
    let url = "http://api.weatherstack.com/current?access_key="+this.acess_key+"&query="+city+" "+state+"&unit="+unit;
    // console.log("&query="+this.city+""+this.state+"&unit="+this.unit)
    return this.http.get(url)
  }

}
