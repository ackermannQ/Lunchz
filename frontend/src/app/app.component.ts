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


    constructor() { }

    ngOnInit() {

    }

}
