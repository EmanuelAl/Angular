import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


const routes: Routes = [
    {
        path: '',
        component: PorCapitalComponent,
        pathMatch: 'full'//config para que si copian la url vacia caigan en la vista de este componente si o si
    },
    {
        path:'region',
        component:PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**',//en caso de que el usuario cargue una ruta que no sea las indicadas anteriormente, indicamos que se rediriga a la pagina principal
        redirectTo:''
        //aunque se podria poner un 404componente para mostrar una vista personalizada de error, pero nosotros lo dejamos asi 
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}