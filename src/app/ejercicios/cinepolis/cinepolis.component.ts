import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!:string;
  cantidadCompradores!:number;
  cantidadBoletos!:number;

  tarjeta1:string='si';
  total!:number;
  resultado!:string;
  maxima!: number;

  opciones=[
    'si',
    'no'
  ]


  calcularTotal(){
    this.maxima = this.cantidadCompradores * 7;
    if (this.cantidadBoletos <= this.maxima ){
      this.total = this.cantidadBoletos * 12;

      if(this.cantidadBoletos > 5){
        this.total = this.total - (this.total * 0.15);
      }

      else if(this.cantidadBoletos  < 4 && this.cantidadBoletos  > 3 ){
        this.total = this.total - (this.total * 0.10);
      }

      switch(this.tarjeta1){
        case 'si': this.total = this.total - (this.total * 0.10); break;
        case 'no': this.total = this.total; break;
      }
      
      this.resultado = "total a pagar: " + this.total + " por " + this.cantidadCompradores + " comprador(es) para: " + this.nombre;    
    }
    

    else{
      this.resultado = "Se supera la cantidad maxima de boletos";
    }
  }


}
