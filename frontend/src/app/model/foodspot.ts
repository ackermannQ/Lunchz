import { Location } from './location';

export class Foodspot {
  name: string;
  location: Location;
  distance: Location;
  menu: string;
  menu_image: string;
  upVote = 1;
  totalVote: number;
  profileImage: string;
  gpsCoord: string;
  color: string;

  constructor(json: any) {
    this.name = json.name;
    this.location = new Location(json.location);
    this.upVote = json.upvote;
    this.totalVote = json.totalVote;
    this.profileImage = json.profileImage;
    this.menu = json.menu;
    this.menu_image = json.menu_image;
    this.distance = json.distance;
    this.gpsCoord = json.gpsCoord;
    this.color = json.color;
   }

}
