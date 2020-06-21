import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { FoodspotsComponent } from './foodspots/foodspots.component';
import { LocationComponent } from './foodspots/location.component';
import { WeatherComponent } from './weather/weather.component';
import { GmapComponent } from './gmap/gmap.component';
import { GMapModule } from 'primeng/gmap';
import { GoogleMapsModule } from '@angular/google-maps';
import { MessageService } from 'primeng/api';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path: 'details/:city', component: DetailsComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      FoodspotsComponent,
      LocationComponent,
      WeatherComponent,
      GmapComponent,
      DetailsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      TableModule,
      HttpClientModule,
      InputTextModule,
      DialogModule,
      ButtonModule,
      GMapModule,
      GoogleMapsModule,
      RouterModule.forRoot(routes)
   ],
   exports: [ RouterModule ],
   providers: [
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
