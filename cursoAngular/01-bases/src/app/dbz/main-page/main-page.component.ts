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

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  constructor() { }

  ngOnInit(): void {
  }


  agregar() {
    console.log(this.nuevo);
  }

  
}
