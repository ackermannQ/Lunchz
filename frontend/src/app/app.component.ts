import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoodspotService } from './services/foodspot.service';
import { WeatherService } from './services/weather.service';

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

    constructor() { }

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        setTimeout(() => {
            this.map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM()
                  })
                  ],
                view: new ol.View({
                  center: ol.proj.fromLonLat([5.343100, 43.493333]),
                  zoom: 12.5
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
            this.map.updateSize();
            this.addMarkerOnMap(this.map, 5.371677, 43.491601);
        }, 0);
    }

    addMarkerOnMap(map: any, lon: number, lat: number) {
        const layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
                    })
                ]
            })
        });
        map.addLayer(layer);
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
