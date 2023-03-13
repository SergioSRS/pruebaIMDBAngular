import { Component } from '@angular/core';
import { ImdbServiceService } from '../imdb-service.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {
  peliculas: any = [];

  constructor (public servicio: ImdbServiceService) {}

  listado() {
    let input: any = document.getElementById('buscador');
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_ckivewik/" + input.value;

    this.servicio.getLista(url).subscribe(peliculas => this.peliculas = peliculas);
  }

  guardarID(id: Number) {
    this.servicio.seleccionID = id;
  }
}