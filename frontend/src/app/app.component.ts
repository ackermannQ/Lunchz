import { Component, OnInit } from '@angular/core';
import { Foodspot } from './model/foodspot';
import { FoodspotService } from './services/foodspot.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FoodspotService]
})
export class AppComponent implements OnInit {

    selectedSpot: Foodspot;

    upVote: boolean;

    foodspot: Foodspot[];

    cols: any[];

    constructor(private foodspotService: FoodspotService) { }

    ngOnInit() {
        this.foodspotService.getFoodSpot().then(foodspot => this.foodspot);

        this.cols = [
            { field: 'foodspot', header: 'Spot' },
            { field: 'location', header: 'Localisation' },
            { field: 'menu', header: 'Menu' },
            { field: 'upvote', header: 'Votez !' },
            { field: 'totalVotes', header: 'Nombre de votes' }
        ];
    }

    findSelectedFoodSpotIndex(): number {
        return this.foodspot.indexOf(this.selectedSpot);
    }
}
