import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Input() personajes: any[] = [];//esto quiere decir que 'personajes' van a venir desde el componente padre


}
