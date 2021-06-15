import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpresasModule } from './empresas/empresas.module';
import { OrganizacionesModule } from './organizaciones/organizaciones.module';
import { AccionesModule } from './acciones/acciones.module';
import { RecompensasModule } from './recompensas/recompensas.module';
import { CopyModule } from './copy/copy.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    UsuariosModule,
    EmpresasModule,
    OrganizacionesModule,
    AccionesModule,
    RecompensasModule,
    CopyModule
  ]
})
export class PagesModule { }
