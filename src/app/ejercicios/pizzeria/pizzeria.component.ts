import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {

  pizzasForm !: FormGroup;
  id: number = 0;
  idOrdenes: number = 0;
  nombre!: string;
  domicilio!: string;
  telefono!: string;

  tamano: string = 'Chica';
  ingredientes: string = "";
  cantPizzas: number = 1;

  subtotal!: number;
  total!: number;
  detalles!: string;

  tamanos = [
    'Chica',
    'Mediana',
    'Grande'
  ];

  jamon!: boolean;
  pina!: boolean;
  champinones!: boolean;


  seleccionados = [{
    'id': 0,
    'nombre': 'armando',
    'domicilio': '',
    'telefono': '',
    'tamano': 'Chica',
    'ingredientes': 'Jamon',
    'cantPizzas': 1,
    'subtotal': 0,
  }];


  ordenes = [{
    'id': 0,
    'nombre': 'Armando',
    'domicilio': 'del jubilo 119',
    'telefono': '4777058178',
    'total': 120,
    'detalles': 'precio \n detalles'
  }];


  agregar() {
    this.ingredientes = "";
    this.subtotal = 0;

    const ultimoId = this.seleccionados[this.seleccionados.length - 1].id;

    if (this.jamon) {
      this.ingredientes = this.ingredientes + "Jamon\n";
      this.subtotal = this.subtotal + 10;
    }
    if (this.pina) {
      this.ingredientes = this.ingredientes + "Piña \n";
      this.subtotal = this.subtotal + 10;
    }
    if (this.champinones) {
      this.ingredientes = this.ingredientes + "Champiñones \n";
      this.subtotal = this.subtotal + 10;
    }

    switch (this.tamano) {
      case 'Chica': this.subtotal = this.subtotal + 40; break;
      case 'Mediana': this.subtotal = this.subtotal + 80; break;
      case 'Grande': this.subtotal = this.subtotal + 120; break;
    }

    this.subtotal = this.subtotal * this.cantPizzas;

    const nuevoSeleccionado = {
      id: this.id + 1 + ultimoId,
      nombre: this.nombre,
      domicilio: this.domicilio,
      telefono: this.telefono,
      tamano: this.tamano,
      ingredientes: this.ingredientes,
      cantPizzas: this.cantPizzas,
      subtotal: this.subtotal,
    };

    this.seleccionados.push(nuevoSeleccionado);

  }

  quitar(idSeleccionado: number) {
    this.seleccionados = this.seleccionados.filter((orden) => orden.id !== idSeleccionado);
  }


  terminar() {
    if (confirm('¿Esta bien tus ordenes?')) {
      this.total = 0;
      const ultimoId = this.ordenes[this.ordenes.length - 1].id;
      this.detalles = "";

      this.total = this.seleccionados.reduce((suma, orden) => suma + orden.subtotal, 0);

      for (let i = 1; i < this.seleccionados.length; i++) {
        this.detalles = this.detalles +
          "\n" + this.seleccionados[i].cantPizzas + " pzs. " + this.seleccionados[i].tamano +
          "\n" + this.seleccionados[i].ingredientes + "......................... $" +
          "" + this.seleccionados[i].subtotal + "\n";
      }

    

    const nuevoSeleccionado = {
      id: this.idOrdenes + 1 + ultimoId,
      nombre: this.nombre,
      domicilio: this.domicilio,
      telefono: this.telefono,
      total: this.total,
      detalles: this.detalles
    };

    this.ordenes.push(nuevoSeleccionado);

    this.seleccionados = [{
      'id': 0,
      'nombre': 'armando',
      'domicilio': '',
      'telefono': '',
      'tamano': 'Chica',
      'ingredientes': 'Jamon',
      'cantPizzas': 1,
      'subtotal': 0,
    }];
    this.nombre = '';
    this.telefono = '';
    this.domicilio = '';
    this.cantPizzas = 0;

    this.jamon = false;
    this.champinones = false;
    this.pina = false;

  }

  }


  constructor(private readonly fB: FormBuilder) {
    this.pizzasForm = this.initForm();
  }

  onSubmit(): void {
    this.obtenerValores();
    this.agregar();
  }
  onSubmit2(): void {
    this.obtenerValores();
    this.terminar();
  }

  onSubmit3(id: number): void {
    this.obtenerValores();
    this.quitar(id);
  }

  obtenerValores(): void {
    const nom = this.pizzasForm.get('nombre')?.value
    const dom = this.pizzasForm.get('domicilio')?.value
    const tel = this.pizzasForm.get('telefono')?.value
    const can = this.pizzasForm.get('cantPizzass')?.value
    const tam = this.pizzasForm.get('tamano')?.value


    this.nombre = nom;
    this.domicilio = dom;
    this.telefono = tel;
    this.cantPizzas = can;
    this.tamano = tam;
  }

  initForm(): FormGroup {
    return this.fB.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      domicilio: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(3)]],
      cantPizzas: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }


}
