import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' 
})
export class GifsService {
  private apiKey : string = 'CZok0VkIP2YDNnuQAIZgPiW1si98QVEQ';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];//declarada publica para que el componente resultados tenga acceso


  constructor(private http: HttpClient) {
    //para que el ultimo resultado aparezca al recargar la app
    this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];

    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];//si el getItem devuelve null, entonces se asignara un array vacio

    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );//el ! le dice a typescrip que no sea estricto , con el valor que devuelva, ya que sabemos que siempre va a tener algo
    // }

  }

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
      //localStorage:
      localStorage.setItem('historial', JSON.stringify(this._historial));
      //JSON.stringify(valor js) este metodo el parametro pasado a formato de notacion JSON
      //Convierte un valor de JavaScript en una cadena de notaci??n de objetos de JavaScript (JSON).
    }

    const params = new HttpParams()
                   .set('api_key', this.apiKey)
                   .set('limit', '10')        
                   .set('q', query);
    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
             .subscribe( (resp ) => {
                // console.log(resp.data);
                this.resultados = resp.data;
                localStorage.setItem('resultados', JSON.stringify(this.resultados));
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