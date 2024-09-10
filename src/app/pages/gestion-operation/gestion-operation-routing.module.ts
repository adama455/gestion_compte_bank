import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionOperationComponent } from './gestion-operation.component';

const routes: Routes = [
  {
    path: '', component: GestionOperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionOperationRoutingModule { }
