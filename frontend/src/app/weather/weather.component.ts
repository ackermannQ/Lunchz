import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=2880b9f7733226a8d303b47c87ebc748&weather';
  appID = '2880b9f7733226a8d303b47c87ebc748';

  constructor(public http: HttpClient) { }
  
  ngOnInit() {
    const response = this.http.get(
      `${this.baseURL}`).pipe((first()));
    console.log(response);
  }
}
