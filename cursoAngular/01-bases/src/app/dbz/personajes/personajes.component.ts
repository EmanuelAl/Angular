import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
//componente hijo de main-page
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input() personajes: any[] = [];//esto quiere decir que 'personajes' van a venir desde el componente padre

  get personajes() {//al llamarse asi , la vista html podra utilizarla como si hiciera uso de una propiedad,pero sigue siendo un getter
    return this.dbzService.personajes;//hacemos uso del metodo get personajes definido en el servicio 
  }

  constructor( private dbzService: DbzService) {}//esto se como injeccion de depedencias, injectamos el servicio en este componente
}
