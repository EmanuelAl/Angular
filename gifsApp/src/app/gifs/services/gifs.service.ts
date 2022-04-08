import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class GifsService {
  private _historial: string[] = [];


  get historial() {
    return [...this._historial];//romper la referencia, para evitar que 
    //si alguien hace algun cambio en esta funcion impacte en la prop _historial directamente
    //y no queremos eso, entonces lo ponemos asi al codigo
  }

  buscarGifs(query: string) {

    this._historial.unshift( query );//inserta al inicio del array

    console.log(this._historial);
  }


}


/*

@Injectable({
  providedIn: 'root' //esto le indica a angular que el servicio es unico y global en el root, lo eleva a un nivel global en nuestra applicacion
})
export class GifsService {

  constructor() { }
}
 */