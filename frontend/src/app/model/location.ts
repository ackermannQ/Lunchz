import { Day } from './day.enum';
import { Position } from './position';

export class Location {

  position: Position;
  positionByDay: Map<Day, Position>;

  constructor(json: any) {
    this.positionByDay = json.positionByDay;
    this.position = json.position;
  }

  getPosition(day: Day): Position {
    if (this.position) {
      return this.position;
    } else {
      return this.positionByDay[day];
    }
  }
}

