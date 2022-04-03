import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [//para que sea visible y lo podamos utilizar en otras partes del proyecto
        ContadorComponent
    ]
})
export class ContadorModule {}