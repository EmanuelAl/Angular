import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [//modulos que usamos en nuestros componentes
    CommonModule,
    FormsModule //para poder trabajar con formularios de angular, y utilizar el ngSubmit por ejemplo
  ],
  providers: [//donde se declaran los servicios 
    DbzService
  ]
})
export class DbzModule { }
