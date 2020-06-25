import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/users';
import { FoodspotService } from '../services/foodspot.service';
import { AuthenticationService } from '../services/authentication.service';
import { WeatherService } from '../services/weather.service';
import { Position } from '../model/position';

declare var ol: any;

@Component({
  selector: 'app-lunchz',
  templateUrl: './lunchz.component.html',
  styleUrls: ['./lunchz.component.css'],
  providers: [FoodspotService, WeatherService]
})
export class LunchzComponent implements OnInit {

  @Input() darkModeActive: boolean;

  showMenu = false;

  currentUser: User;

  map: any;
  weather: any;

  constructor(private foodspotService: FoodspotService,  private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
      setTimeout(() => this.initMap(), 0);
  }

  initMap() {
    const agencyPos: Position = {address: "ICI CEST L'AGENCE", distance: "0 ", lon: 5.343100, lat: 43.493333};
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

    this.addMarkerOnMap(agencyPos, 'red', 'agency');
    foodspots.forEach(fs => {
      const position = fs.location.getTodayPosition();
      this.addMarkerOnMap(position, fs.color, 'dot');
    });
    this.map.updateSize();
    });
  }

  addMarkerOnMap(position: Position, color: string = 'black', icon: string) {
    const feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([position.lon, position.lat]))
    });

    feature.setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        color: color,
        crossOrigin: 'anonymous',
        src: '../assets/images/' + icon + '.png',
      })
    }));

    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
          features: [ feature ]
      })
    });

    this.map.addLayer(layer);
  }

}
