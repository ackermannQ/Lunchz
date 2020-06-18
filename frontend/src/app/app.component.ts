import { Component, OnInit } from '@angular/core';

import { FoodspotService } from './services/foodspot.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FoodspotService]
})
export class AppComponent implements OnInit {

    showMenu = false;
    darkModeActive = false;


    constructor() { }

    ngOnInit() {

    }

    toggleMenu() {
        if (!this.showMenu) {
            this.showMenu = true;
        } else {
            this.showMenu = false;
        }
    }

    modeToggleSwitch() {
        if (!this.darkModeActive) {
            this.darkModeActive = true;
        } else {
            this.darkModeActive = false;
        }
    }

}
