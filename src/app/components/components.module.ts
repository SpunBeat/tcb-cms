import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuModule } from './sidemenu/sidemenu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidemenuModule
  ],
  exports:[
    SidemenuModule
  ]
})
export class ComponentsModule { }
