import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ICurrentWeather } from 'src/app/data/models/ICurrentWeather';

export class CitiesData implements InMemoryDbService {

  createDb(): { cities: ICurrentWeather[] } {
    const cities: ICurrentWeather[] = [
      {
        "id": 1,
        "request": {
          "type": "City",
          "query": "Vitória, Brasilien",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Vitória",
          "country": "Brasilien",
          "region": "Espirito Santo",
          "lat": "-20.317",
          "lon": "-40.350",
          "timezone_id": "America\/Sao_Paulo",
          "localtime": "2020-07-24 18:35",
          "localtime_epoch": 1595615700,
          "utc_offset": "-3.0"
        },
        "current": {
          "observation_time": "09:35 PM",
          "temperature": 23,
          "weather_code": 116,
          "weather_icons": [
            "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0004_black_low_cloud.png"
          ],
          "weather_descriptions": [
            "Partly cloudy"
          ],
          "wind_speed": 7,
          "wind_degree": 50,
          "wind_dir": "NE",
          "pressure": 1021,
          "precip": 0.1,
          "humidity": 73,
          "cloudcover": 75,
          "feelslike": 25,
          "uv_index": 1,
          "visibility": 10,
          "is_day": "no"
        }
      }
    ];
    return { cities };
  }
}
