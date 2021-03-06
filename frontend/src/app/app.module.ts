import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';


import { FoodspotsComponent } from './foodspots/foodspots.component';
import { LocationComponent } from './foodspots/location.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { LunchzComponent } from './lunchz/lunchz.component';


const routes: Routes = [
   {path: 'details/:city', component: WeatherComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      FoodspotsComponent,
      LocationComponent,
      WeatherComponent,
      LoginComponent,
      AdminComponent,
      HomeComponent,
      LunchzComponent
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
      ReactiveFormsModule,
      appRoutingModule,
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   providers: [
      MessageService,
      fakeBackendProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
