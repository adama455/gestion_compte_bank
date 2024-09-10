import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionOperationRoutingModule } from './gestion-operation-routing.module';
import { GestionOperationComponent } from './gestion-operation.component';


@NgModule({
  declarations: [
    GestionOperationComponent
  ],
  imports: [
    CommonModule,
    GestionOperationRoutingModule
  ]
})
export class GestionOperationModule { }
