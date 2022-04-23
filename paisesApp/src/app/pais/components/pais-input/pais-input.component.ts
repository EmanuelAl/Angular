import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();//es como un observable especial,la idea es que se emita cuando deje de escribir el usuario

  termino: string = '';


  ngOnInit(): void {
    //al tener el debouncer como un observable , podemos usar Rxjs para usar operadores de Rxjs como 'Pipe'
    this.debouncer
    .pipe(//metodo pipe() que me permite transformar la salida del subscribe
      debounceTime(300)//operador que hace que el subscribe no se ejecute hasta que el usuario deje de escribir y hayan pasado 300ms
      // es decir, no se emite el subscribe hasta que el observable(debouncer) haya dejado de emitir valores por los proximos 300msegundos
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
    
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );//le pasamos el termino que será el argumento 'valor' que se pasa al subscribe en el onInint
  }
  

}
