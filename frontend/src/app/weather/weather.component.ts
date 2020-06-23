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
  city = 'Aix-en-provence';
  metric = 'metric';
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  condition: any;
  description: any;
  windSpeed: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchWeatherCoord(this.city, this.metric);
  }

  fetchWeatherCity(city: string, metric: string) {
    setTimeout(() => {
    this.weatherService.fetchWeatherCity(city, metric).subscribe(resp => {
      this.currentTemp = this.weatherService.temp;
      this.minTemp = this.weatherService.tempMin;
      this.maxTemp = this.weatherService.tempMax;
      this.description = this.weatherService.description;
      this.condition = this.weatherService.condition;
      this.windSpeed = this.weatherService.windSpeed;
     });
    }, 0);
  }

  fetchWeatherCoord(city: string, metric: string) {
    setTimeout(() => {
    this.weatherService.fetchWeatherCoord(city, metric).subscribe(resp => {
      this.currentTemp = this.weatherService.temp;
      this.minTemp = this.weatherService.tempMin;
      this.maxTemp = this.weatherService.tempMax;
      this.description = this.weatherService.description;
      this.condition = this.weatherService.condition;
      this.windSpeed = this.weatherService.windSpeed;
     });
    }, 0);
  }

}
