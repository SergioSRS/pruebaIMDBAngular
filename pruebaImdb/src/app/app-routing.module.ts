import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { RepartoComponent } from './reparto/reparto.component';
const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
{ path: 'reparto', component: RepartoComponent }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
