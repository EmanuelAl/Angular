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

  buscarGifs(query: string = '') {
//VALIDACIONES:
    query = query.trim().toLocaleLowerCase();//para que las palabras que escriba sean minusculas 
    //y asi poder solo incluir en historial parablas unicas ,sin importar si fueron escritas en mayusculas o minusculas

    //Para no tener string repetidos :
    //si no incluye query en historial, solo en ese caso lo inserto en el array
    if(!this._historial.includes( query)){

      this._historial.unshift( query );//inserta al inicio del array

      //limitando la cantidad a mostrar del historial
      this._historial = this._historial.splice(0 , 10);//limita el array a 10 elementos

    }

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