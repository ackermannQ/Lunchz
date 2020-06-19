import { Component, OnInit } from '@angular/core';
import { Foodspot } from '../model/foodspot';
import { FoodspotService } from '../services/foodspot.service';

@Component({
  selector: 'app-foodspots',
  templateUrl: './foodspots.component.html',
  styleUrls: ['./foodspots.component.css']
})
export class FoodspotsComponent implements OnInit {

  foodSpots: Foodspot[] = [];
  selectedFoodSpot: Foodspot;

  cols: any[];

  constructor(private foodSpotService: FoodspotService) {
    this.cols = [
      { field: 'name', header: 'Spot' },
      { field: 'location', header: 'Distance' },
      { field: 'menu', header: 'Menu' },
      { field: 'upvote', header: 'Votez !' }
    ];
  }

  ngOnInit() {
    this.foodSpotService.getFoodSpot().subscribe(foodSpots => {
      this.foodSpots = foodSpots;
      this.updateSelected();
    });
  }

  updateSelected() {
    this.foodSpots = this.foodSpots.sort( (a, b) => a.totalVote - b.totalVote );
    this.selectedFoodSpot = this.foodSpots[0];
  }

}
