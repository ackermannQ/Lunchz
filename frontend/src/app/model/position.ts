export class Position {
  distance: string;

  constructor(json: any) {
    this.distance = json;
    console.log(json);
  }
}