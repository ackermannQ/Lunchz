import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  appID = '2880b9f7733226a8d303b47c87ebc748';

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    const resp = this.fetchWeather('Paris', 'metric');
    console.log(resp);
  }

  fetchWeather(city: string, metric: string) {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`).pipe(map((resp) => {
        resp;
  }));
  }
}
