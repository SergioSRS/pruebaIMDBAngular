import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula';
import { Observable } from 'rxjs';
import { Actor } from './actor';


@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {
  seleccionID: Number;

  constructor(private http: HttpClient) {
    this.seleccionID = -1;
  }

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url);
  }

  verActores(url: string): Observable<Actor[]> | null {
    if (this.seleccionID != -1) {
     
      return this.http.get<Actor[]>(url);
    }
    else {
     
      return null;
    }
  }
}