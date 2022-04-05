import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() // esto permite que la clase sea una clase que se pueda injectar fuera de este archivo, ademas de definir la clase como una clase de servicio
export class DbzService {

    private _personajes: Personaje[] = [
        {
        nombre: 'Goku',
        poder: 15000
        },
        {
        nombre: 'Vegeta',
        poder: 7500
        }
    ];

    get personajes(): Personaje[] {//los objetos son mandados por referencia, entonces para evitar que puedan manipular este getter 
        //se hace lo sig
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado');
    }

}//se debe declarar en dbz.module.ts
//este servicio se va a ejecutar solo hasta que alguien lo requiera
//cuando alguien lo requiera se crea la primer instancia
// y despues de haberse creado, va a ser la misma instancia
//para cualquier componente, otros servicios o lo que sea , que lo consuma, se usa la misma instancia
//
//en el servicio se maneja la data, es como una clase abstracta donde va a ir la informacion y los metodos para manipular la informacion o interactuar con fuentes externas
//como definir peticiones http, para hacer uso de los endpoint de una api rest por ejemplo