import { Day } from './day.enum';
import { Position } from './position';

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
    } else {
      return this.positionByDay[day];
    }
  }

  getDistance(day: Day): Position {
    if (this.distance) {
      return this.distance;
    } else {
      return this.distanceByDay[day];
    }
  }
}

