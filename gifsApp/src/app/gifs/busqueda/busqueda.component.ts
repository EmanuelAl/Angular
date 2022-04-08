import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  
//   {static: true/false} , es true si la vista(html) no depende de ningun condicional
//   es false si depende la vista(html) de alguna condicional*/
// @ViewChild('textos',{static: true}) textos: ElementRef | any//para utilizar la seleccion de la vista

  //     input referencia nombre prop 
  @ViewChild('txtBuscar', {static: true}) txtBuscar?: ElementRef<HTMLInputElement> | any;

  constructor(private _gifsService: GifsService) {

  }



  buscar() {

    const valor = this.txtBuscar?.nativeElement.value;

    this._gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
/*
el @ViewChild() es como usar en javascript el document.querySelector('etiqueta')
es para usar lo como selector

//en angular para seleccionar algun elemento del DOM podemos usar los viewchilds:

    -- en la vista creamos la variable a seleccionar con #nombrevariable
    -- en el componente se importa la clase ViewChild
    -- se crea en el componente una propiedad nueva con el decorador @ViewChild('nombrevariable')


operador not null:
lo usamos para indicar a typescript que estamos 100%
que la propiedad va a tener un valor siempre
que no va a tener en algun momento un valor null
el operador es ?: se pone despues entre el nombre
de la propiedad y el tipo 

@ViewChild('txtBuscar') txtBuscar?: ElementRef;



*/