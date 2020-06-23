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

  cols: any[];

  upVote = true;

  constructor(private foodSpotService: FoodspotService, private messageService: MessageService) {
    this.cols = [
      { field: 'name', header: 'Spot' },
      { field: 'location', header: 'Distance' },
      { field: 'menu', header: 'Menu' },
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
    this.foodSpots = this.foodSpots.sort( (a, b) => a.totalVote - b.totalVote );
    this.selectedFoodSpot = this.foodSpots[0];
  }

  upVotefunction(foodspot: Foodspot) {
    if (foodspot.totalVote === 0) {
      if (this.upVote) {
        this.messageService.add({ severity: 'success', summary: 'Merci pour ton vote!', detail: 'On est pas bien là ?' });
        this.upVote = false;
        this.resetAll(foodspot);
        foodspot.upvote += 1;
        foodspot.totalVote += 1;
      } else {
        this.showViaService();
        foodspot.upvote -= 1;
        foodspot.totalVote -= 1;
        this.upVote = true;
      }
    } else {
      foodspot.totalVote = 0;
    }
  }

  resetAll(foodspot: Foodspot) {
    this.foodSpotService.getFoodSpot().subscribe(foodSpots => {
      foodSpots.forEach(fs => {
        fs.totalVote -= 1;
      });
    });

  }

  showViaService() {
    this.messageService.add({severity: 'error', summary: 'Déjà voté', detail: "Arrête de faire n'importe quoi"});
  }

  clear() {
    this.messageService.clear();
  }

}
