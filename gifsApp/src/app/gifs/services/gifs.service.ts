import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' 
})
export class GifsService {
  private apiKey : string = 'CZok0VkIP2YDNnuQAIZgPiW1si98QVEQ';
  private _historial: string[] = [];
  // toDO  cambiar any por su tipo
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {}

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

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=CZok0VkIP2YDNnuQAIZgPiW1si98QVEQ&q= ${ query } &limit=10`)
             .subscribe( (resp ) => {
                console.log(resp.data);
                this.resultados = resp.data;
             });
    
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