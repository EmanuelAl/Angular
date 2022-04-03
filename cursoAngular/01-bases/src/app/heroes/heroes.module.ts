import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [//se declaran los componentes que tienen relacion entre sí
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //aca va lo que quiero que sea visible de este modulo
        ListadoComponent
    ],
    imports: [//aqui dentro van modúlos que utilizaramos
        CommonModule //para que me reconosca en el html las directivas estructurales como ngIf o ngFor
    ]
})
export class HeroesModule {}