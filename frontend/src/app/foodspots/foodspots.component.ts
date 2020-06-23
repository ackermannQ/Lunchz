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
    if (this.upVote) {
      this.messageService.add({severity: 'success', summary: 'Merci pour ton vote!', detail: 'Via MessageService'});
      this.upVote = false;
      foodspot.totalVote += 1;
    } else {
      this.showViaService();
    }
  }

  showViaService() {
    this.messageService.add({severity: 'error', summary: 'Déjà voté', detail: 'Déso pas déso'});
  }

  clear() {
    this.messageService.clear();
  }

}
