import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  appID = '2880b9f7733226a8d303b47c87ebc748';

  description: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  windSpeed: number;
  condition: any;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.fetchWeather('Paris', 'metric');
  }

  fetchWeather(city: string, metric: string) {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&lang=fr&APPID=${this.appID}`).pipe(map((resp) => {
        this.description = resp['weather']['0']['description'];
        this.temp = resp['main']['temp'];
        this.tempMin = resp['main']['temp_min'];
        this.tempMax = resp['main']['temp_max'];
        this.windSpeed = resp['wind']['speed'];
        this.condition = resp['weather']['0']['main'];
  }));
  }

}
