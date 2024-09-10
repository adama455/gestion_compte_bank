import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientComponent } from './gestion-client.component';

const routes: Routes = [
  {
    path: '', component: GestionClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionClientRoutingModule { }
