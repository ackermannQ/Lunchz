import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Observable<any>;
  city = 'Paris';
  metric = 'metric';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchWeather(this.city, this.metric);
  }

  fetchWeather(city: string, metric: string) {
    console.log('fetchweather')
    this.weatherService.fetchWeather(city, metric).subscribe(resp => {
      console.log(resp);
    });
  }
}
