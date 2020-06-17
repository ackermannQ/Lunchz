import { GpsPos } from './gpspos';
import { Location } from './location';
import { Day } from './day.enum';

export class FixedLocation implements Location {

  position: GpsPos;

  getPosition(day: Day){
    return this.position;
  }

}
