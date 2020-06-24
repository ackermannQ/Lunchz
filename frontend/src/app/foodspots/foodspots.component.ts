import { Component, OnInit } from '@angular/core';
import { Foodspot } from '../model/foodspot';
import { FoodspotService } from '../services/foodspot.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-foodspots',
  templateUrl: './foodspots.component.html',
  styleUrls: ['./foodspots.component.css']
})
export class FoodspotsComponent implements OnInit {

  foodSpots: Foodspot[] = [];
  selectedFoodSpot: Foodspot;
  upvotedFoodspot: Foodspot;
  displayedMenu: string;

  cols: any[];

  constructor(private foodSpotService: FoodspotService, private messageService: MessageService) {
    this.cols = [
      { field: 'name', header: 'Spot' },
      { field: 'location', header: 'Distance' },
      { field: 'menu_image', header: 'Menu' },
      { field: 'totalVote', header: 'Votez !' }
    ];
  }

  ngOnInit() {
    this.foodSpotService.getFoodSpot().subscribe(foodSpots => {
      this.foodSpots = foodSpots;
      this.updateSelected();
    });
  }

  updateSelected() {
    this.foodSpots = this.foodSpots.sort( (a, b) => b.totalVote - a.totalVote );
    this.selectedFoodSpot = this.foodSpots[0];
  }

  upvote(foodspot: Foodspot) {
    if (this.upvotedFoodspot) {
      this.upvotedFoodspot.totalVote -= 1;
    }

    foodspot.totalVote += 1;
    this.upvotedFoodspot = foodspot;

    this.updateSelected();
  }

  clear() {
    this.messageService.clear();
  }

}
