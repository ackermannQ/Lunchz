import { Component, OnInit } from '@angular/core';
import { Foodspot } from '../model/foodspot';
import { FoodspotService } from '../services/foodspot.service';
import { Message } from 'primeng//api';
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

  upVote: boolean = true;

  msgs: Message[] = [];

  constructor(private foodSpotService: FoodspotService, private messageService: MessageService) {
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

  upVotefunction() {
    if (this.upVote) {
      console.log('upvote!');
      this.upVote = false;
    } else {
      this.showViaService();
    }
  }

  showViaService() {
    console.log(console.log('Déjà voté !'));
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  clear() {
    this.messageService.clear();
  }

}
