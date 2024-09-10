import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCompteRoutingModule } from './gestion-compte-routing.module';
import { GestionCompteComponent } from './gestion-compte.component';


@NgModule({
  declarations: [
    GestionCompteComponent
  ],
  imports: [
    CommonModule,
    GestionCompteRoutingModule
  ]
})
export class GestionCompteModule { }
