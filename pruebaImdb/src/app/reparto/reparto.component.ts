import { Component } from '@angular/core';
import { ImdbServiceService } from '../imdb-service.service';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent {
  reparto: any = [];

  constructor(public servicioImdb: ImdbServiceService) {}

  listadoReparto() {
    let url: string = "https://imdb-api.com/en/API/FullCast/k_ckivewik/" + this.servicioImdb.seleccionID.toString();
  
    console.log(url);
    this.servicioImdb.verActores(url)!.subscribe(reparto => this.reparto = reparto);
  }

 
}
