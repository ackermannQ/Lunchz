import { Day } from './day.enum';
import { Position } from './position';
import { throwError } from 'rxjs';

export class Location {

  position: Position;
  distance: Position;
  positionByDay: Map<Day, Position>;
  distanceByDay: Map<Day, Position>;

  constructor(json: any) {
    this.positionByDay = json.positionByDay;
    this.position = json.position;
    this.distanceByDay = json.distanceByDay;
    this.distance = json.distance;
  }

  getPosition(day: Day): Position {
    if (this.position) {
      return this.position;
    } else if (this.positionByDay) {
      return this.positionByDay[day];
    } else {
      console.log("Error : invalid location", this);
    }
  }

  getDistance(day: Day): Position {
    if (this.distance) {
      return this.distance;
    } else if (this.distanceByDay) {
      return this.distanceByDay[day];
    } else {
      console.log("Error : invalid location", this);
    }
  }
}

