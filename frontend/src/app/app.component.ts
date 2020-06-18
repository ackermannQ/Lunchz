import { Component, OnInit } from '@angular/core';

import { FoodspotService } from './services/foodspot.service';

declare var ol: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FoodspotService]
})
export class AppComponent implements OnInit {

    showMenu = false;
    darkModeActive = false;
    map: any;

    constructor() { }

    ngOnInit() {
        this.map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([73.8567, 18.5204]),
            zoom: 8
            })
        });
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
