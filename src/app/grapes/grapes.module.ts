import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrapesComponent } from './grapes.component';
import { GrapesRoutingModule } from './grapes-routing.module'



@NgModule({
  declarations: [GrapesComponent],
  imports: [
    CommonModule,
    GrapesRoutingModule
  ]
})
export class GrapesModule { }
