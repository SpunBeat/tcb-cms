import { NgModule } from '@angular/core';
import { RecompensasComponent } from './recompensas.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RecompensasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecompensasRoutingModule { }
