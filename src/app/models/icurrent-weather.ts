export interface ICurrentWeather {
    observationTime: string;
    temperature: number;
    code: number;
    description: string;
    windSpeed: number;
    windDegree: number;
    windDirection: string;
    pressure: number;
    preciptation: number;
    humidity: number;
    cloudCover: number;
    feelsLike: number;
    uvIndex: number;
    visibility: number;
    isDay: boolean;
}
