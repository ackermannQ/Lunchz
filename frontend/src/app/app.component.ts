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
    darkModeActive = true;
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
            center: ol.proj.fromLonLat([5.343100, 43.493333]),
            zoom: 12
            }),
        });
        const layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([5.343100, 43.493333]))
                    })
                ]
            })
        });
        this.map.addLayer(layer);
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
