import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';//nos permite recibir un observable y regresar otro observable

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;//!: ese simbolo le dice typescript que sabemos lo que hacemos, que puede ser nulo,pero que lo trate como si siempre tuviera data(algun valor)

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(//metodo pipe() que me permite transformar la salida del subscribe
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ),
      tap(console.log)// el tap se usa para disparar un efecto secundario, aca recibe el producto del swichMap y ejecuta el console.log para mostrarlo en consola
    )
    .subscribe( pais => {
      this.pais = pais;
    });

    //otra forma:
    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha( id )
    //   .subscribe( pais => {
    //     console.log(pais);
    //   });

    // });
  }

}
