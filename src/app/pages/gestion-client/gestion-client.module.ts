import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionClientRoutingModule } from './gestion-client-routing.module';
import { GestionClientComponent } from './gestion-client.component';


@NgModule({
  declarations: [
    GestionClientComponent
  ],
  imports: [
    CommonModule,
    GestionClientRoutingModule
  ]
})
export class GestionClientModule { }
