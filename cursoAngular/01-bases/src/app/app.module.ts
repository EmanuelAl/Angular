import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// import { HeroeComponent } from './heroes/heroe/heroe.component';los borramos para utilizar nuestro modulo de heroes que creamos
// import { ListadoComponent } from './heroes/listado/listado.component';los borramos para utilizar nuestro modulo de heroes que creamos
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule, // modulo que creamos para trabajar en modulos , (es bueno si nuestra app va a crecer mucho a futuro, entonces es bueno trabajar con modulos)
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
