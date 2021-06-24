import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccionesComponent } from './acciones/acciones.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  { path: '', component: AccionesComponent }
];

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ComponentsModule
  ],
})
export class AllActionsModule { }
