import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foodspot } from '../model/foodspot';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class MenuService {

    constructor(private http: HttpClient) {}

    getMenu(menuUrl: string): Observable<any> {
        return this.http.get(menuUrl, {responseType: 'text'});
    }
}
