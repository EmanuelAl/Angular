import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent // para que sea publico y sea utilizado en otra parte del codigo
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
