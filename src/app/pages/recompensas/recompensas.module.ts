import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecompensasRoutingModule } from './recompensas-routing.module';
import { RecompensasComponent } from './recompensas.component';



@NgModule({
  declarations: [
    RecompensasComponent
  ],
  imports: [
    CommonModule,
    RecompensasRoutingModule
  ]
})
export class RecompensasModule { }
