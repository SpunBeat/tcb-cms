import { NgModule } from '@angular/core';
import { OrganizacionesComponent } from './organizaciones.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: OrganizacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizacionesRoutingModule { }
