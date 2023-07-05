import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistenciasModModule } from './ejercicios/resistencias_mod/resistencias_mod.module';
import { DistanciasComponent } from './ejercicios/distancias/distancias.component';
import { CinepolisComponent } from './ejercicios/cinepolis/cinepolis.component';
import { ResistenciasComponent } from './ejercicios/resistencias/resistencias.component';
import { PizzeriaComponent } from './ejercicios/pizzeria/pizzeria.component';

const routes: Routes = [
  
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'Resistencias', component:ResistenciasComponent},
  {path: 'Distancias PxP', component:DistanciasComponent},
  {path: 'Cinepolis', component:CinepolisComponent},
  
  {path: 'Pizzeria', component:PizzeriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
