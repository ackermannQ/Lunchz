import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  darkMode = false;
  conditions = ['Clouds', 'Rain', 'Drizzle', 'Storm', 'Sunny', 'Clear', 'Fog'];
  condition = 'Sunny';
  currentTemp;
  temp: number;
  maxTemp: number;
  minTemp: number;

  ngOnInit() {

  }

}
