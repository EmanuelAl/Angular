import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    //validacion si esta vacio la propieda nombre
    if (this.nuevo.nombre.trim().length === 0) { return; }// si no tiene nada 'nombre', pues que salimos del metodo con return

    this.personajes.push(this.nuevo);//agregamos a la lista
    console.log(this.nuevo);
    //purgamos el objeto
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
    console.log(this.personajes);
  }


}
