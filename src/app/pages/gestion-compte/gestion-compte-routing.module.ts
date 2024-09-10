import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCompteComponent } from './gestion-compte.component';

const routes: Routes = [
  {
    path: '', component: GestionCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCompteRoutingModule { }
