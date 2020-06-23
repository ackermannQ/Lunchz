import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  appID = '2880b9f7733226a8d303b47c87ebc748';

  private readonly baseURL2 = 'https://api.openweathermap.org/data/2.5/weather?';

  description: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  windSpeed: number;
  condition: any;
  lat = 43.493333;
  lon =  5.343100;

  constructor(public http: HttpClient) {
  }

  fetchWeatherCity(city: string, metric: string) {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&lang=fr&APPID=${this.appID}`).pipe(map((resp) => {
        this.description = resp['weather']['0']['description'];
        this.temp = resp['main']['temp'];
        this.tempMin = resp['main']['temp_min'];
        this.tempMax = resp['main']['temp_max'];
        this.windSpeed = resp['wind']['speed'] *  3.6;
        this.condition = resp['weather']['0']['main'];
  }));
  }

  fetchWeatherCoord(city: string, metric: string) {
    return this.http.get(
      `${this.baseURL2}lat=${this.lat}&lon=${this.lon}&units=${metric}&lang=fr&APPID=${this.appID}`).pipe(map((resp) => {
        this.description = resp['weather']['0']['description'];
        this.temp = resp['main']['temp'];
        this.tempMin = resp['main']['temp_min'];
        this.tempMax = resp['main']['temp_max'];
        this.windSpeed = resp['wind']['speed'] * 3.6;
        this.condition = resp['weather']['0']['main'];
  }));
  }

}
