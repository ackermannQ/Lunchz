import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { Routes, RouterModule } from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { AppComponent } from './app.component';
import { FoodspotsComponent } from './foodspots/foodspots.component';
import { LocationComponent } from './foodspots/location.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
   {path: 'details/:city', component: WeatherComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      FoodspotsComponent,
      LocationComponent,
      WeatherComponent
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
      ToastModule,
      OverlayPanelModule,
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
