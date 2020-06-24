import { Component, OnInit } from '@angular/core';
import { FoodspotService } from './services/foodspot.service';
import { WeatherService } from './services/weather.service';
import { Position } from './model/position';
import { Icon, Style } from 'ol/style';

declare var ol: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FoodspotService, WeatherService]
})
export class AppComponent implements OnInit {

    showMenu = false;
    darkModeActive = true;
    map: any;
    weather: any;

    constructor(private foodspotService: FoodspotService) { }

    ngOnInit() {
        setTimeout(() => this.initMap(), 0);
    }

    initMap() {
        const agencyPos: Position = {address: "ICI CEST L'AGENCE", distance: "0 connard", lon: 5.343100, lat: 43.493333};
        this.foodspotService.getFoodSpot().subscribe(foodspots => {
            this.map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM()
                  })
                  ],
                view: new ol.View({
                  center: ol.proj.fromLonLat([agencyPos.lon, agencyPos.lat]),
                  zoom: 12.5
                  }),
            });

            this.addMarkerOnMap(agencyPos, 'red');
            foodspots.forEach(fs => {
                const position = fs.location.getTodayPosition();
                this.addMarkerOnMap(position, fs.color);
            });
            this.map.updateSize();
        });
    }

    addMarkerOnMap(position: Position, color: string = 'black') {
        const feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([position.lon, position.lat]))
        });

        feature.setStyle(new ol.style.Style({
            image: new ol.style.Icon({
              color: color,
              crossOrigin: 'anonymous',
              src: '../assets/images/dot.png',
            })
        }));

        const layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [ feature ]
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
