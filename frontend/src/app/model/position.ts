export class Position {
  distance: string;
  position: string;

  constructor(json: any) {
    this.distance = json;
    this.position = json;
  }
}
