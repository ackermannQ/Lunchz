import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foodspot } from '../model/foodspot';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FoodspotService {

    constructor(private http: HttpClient) {}

    getFoodSpot(): Observable<Foodspot[]> {
        return this.http.get<any>('assets/data/foodspot.json').pipe(map(res => {
            return res.data.map(json => new Foodspot(json));
        }));
    }
}
