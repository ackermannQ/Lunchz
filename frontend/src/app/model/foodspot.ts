import { Location } from './location';

export class Foodspot {
  name: string;
  location: Location;
  menu: string;
  upvote: number;
  totalVote: number;
  profileImage: string;

  constructor(json: any) {
    this.name = json.name;
    this.location = new Location(json.location);
    this.upvote = json.upvote;
    this.totalVote = json.totalVote;
    this.profileImage = json.profileImage;
    this.menu = json.menu;

   }

}
