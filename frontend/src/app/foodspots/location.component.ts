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

  address: string;
  distance: string;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const position = this.location.getTodayPosition();
    this.address = position.address;
    this.distance = position.distance;
  }
}
