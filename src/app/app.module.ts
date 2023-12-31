import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { CinepolisComponent } from './ejercicios/cinepolis/cinepolis.component';

import { FormsModule } from '@angular/forms';
import {DistanciasModModule} from './ejercicios/distancias_mod/distancias_mod.module';
import { ResistenciasModModule } from './ejercicios/resistencias_mod/resistencias_mod.module';
import { CinepolisModModule } from './ejercicios/cinepolis_mod/cinepolis_mod.module';
import { MenuComponent } from './ejercicios/menu/menu.component';
import { PizzeriaComponent } from './ejercicios/pizzeria/pizzeria.component';
import { PizzeriaModModule } from './ejercicios/pizzeria-mod/pizzeria-mod.module';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    DistanciasModModule,
    ResistenciasModModule,
    CinepolisModModule,
    PizzeriaModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
