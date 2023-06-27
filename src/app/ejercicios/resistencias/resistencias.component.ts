import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  banda1!:string;
  banda2!:string;
  banda3!:string;
  banda4!:string;

  minimo!:number;
  maximo!:number;

  resistencia!:string;  

  banda1Select:string='brown';
  banda2Select:string='black';
  banda3Select:string='black';
  banda4Select:string='gold';

  colores=[
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  tolerancia=[
    'gold',
    'silver',
  ];

  calcularResistencias(){
    switch(this.banda1Select){
      case 'black': this.banda1 = "0"; break;
      case 'brown': this.banda1 = "1"; break;
      case 'red': this.banda1 = "2"; break;
      case 'orange': this.banda1 = "3"; break;
      case 'yellow': this.banda1 = "4"; break;
      case 'green': this.banda1 = "5"; break;
      case 'blue': this.banda1 = "6"; break;
      case 'violet': this.banda1 = "7"; break;
      case 'grey': this.banda1 = "8"; break;
      case 'white': this.resistencia = this.banda1 = "9"; break;
    }

    switch(this.banda2Select){
      case 'black': this.banda2 = "0"; break;
      case 'brown': this.banda2 = "1"; break;
      case 'red': this.banda2 = "2"; break;
      case 'orange': this.banda2 = "3"; break;
      case 'yellow': this.banda2 = "4"; break;
      case 'green': this.banda2 = "5"; break;
      case 'blue': this.banda2 = "6"; break;
      case 'violet': this.banda2 = "7"; break;
      case 'grey': this.banda2 = "8"; break;
      case 'white': this.banda2 = this.banda1 = "9"; break;
    }

    this.resistencia = this.banda1 + this.banda2;

    switch(this.banda4Select){
      case 'gold': this.banda4 = " con 5%"; break;
      case 'silver': this.banda4 = " con 10%"; break;
    }

    switch(this.banda3Select){
      case 'black': this.resistencia = this.resistencia  + "Ω" + this.banda4; break;
      case 'brown': this.resistencia = this.resistencia + '0Ω' + this.banda4;break;
      case 'red': this.resistencia = this.resistencia + '00Ω' + this.banda4;break;
      case 'orange': this.resistencia = this.resistencia + '000Ω' + this.banda4;break;
      case 'yellow': this.resistencia = this.resistencia + '0000Ω' + this.banda4;break;
      case 'green': this.resistencia = this.resistencia + '00000Ω' + this.banda4;break;
      case 'blue': this.resistencia = this.resistencia + '000000Ω' + this.banda4;break;
      case 'violet': this.resistencia = this.resistencia + '0000000Ω' + this.banda4;break;
      case 'grey': this.resistencia = this.resistencia + '00000000Ω' + this.banda4;break;
      case 'white': this.resistencia = this.resistencia + '000000000Ω' + this.banda4;break;
    }

    switch(this.banda4Select){
      case 'gold':
    this.minimo = (parseInt(this.resistencia) - (parseInt(this.resistencia) * 0.5));
    this.maximo = (parseInt(this.resistencia) + (parseInt(this.resistencia) * 0.5)); break;

    case 'silver':
    this.minimo = (parseInt(this.resistencia) - (parseInt(this.resistencia) * 0.10));
    this.maximo = (parseInt(this.resistencia) + (parseInt(this.resistencia) * 0.10)); break;

    }

    this.resistencia = this.resistencia +  ", minimo: " + this.minimo + " Maximo: " + this.maximo;
  }


}
