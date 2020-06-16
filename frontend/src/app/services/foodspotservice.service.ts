import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../domain/car';

@Injectable()
export class FoodspotserviceService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/data/foodspot.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }
}
