import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {

  }

//creamos propiedad de tipo evento que emitira un Personaje en el componente padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    //validacion si esta vacio la propieda nombre
    if (this.nuevo.nombre.trim().length === 0) { return; }// si no tiene nada 'nombre', pues que salimos del metodo con return

    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);//emitimos el personaje cuando este evento sea llamado
    //purgamos el objeto

    this.dbzService.agregarPersonaje( this.nuevo);//usamos el servicio que creamos para pasar la informacion a agregar


    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }


}
