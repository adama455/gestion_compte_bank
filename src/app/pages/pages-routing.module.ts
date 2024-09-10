import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
     {
      path: 'clients', 
      loadChildren: () => import("./gestion-client/gestion-client.module").then((c) => c.GestionClientModule)
     },
     {
      path: 'comptes', 
      loadChildren: () => import("./gestion-compte/gestion-compte.module").then((c) => c.GestionCompteModule)
     },
     {
      path: 'operations', 
      loadChildren: () => import("./gestion-operation/gestion-operation.module").then((c) => c.GestionOperationModule)
     },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
