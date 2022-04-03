import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }


  agregar() {
    //validacion si esta vacio la propieda nombre
    if (this.nuevo.nombre.trim().length === 0) { return; }// si no tiene nada 'nombre', pues que salimos del metodo con return

    this.personajes.push(this.nuevo);//agregamos a la lista
    //purgamos el objeto
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }

  
}
