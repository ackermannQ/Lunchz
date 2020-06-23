import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Location } from '../model/location';
import { Day } from '../model/day.enum';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterViewInit {

  @Input() location: Location;

  position: string;
  distance: string;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const dayIndex = new Date().getDay();
    this.position = this.location.getPosition(dayIndex).toString();
    this.distance = this.location.getDistance(dayIndex).toString();
  }

}
