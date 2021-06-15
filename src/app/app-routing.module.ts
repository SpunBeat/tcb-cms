import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: SidemenuComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },

      {
        path: 'acciones',
        loadChildren: () => import('./pages/acciones/acciones.module').then(m => m.AccionesModule),
      },

      {
        path: 'copy',
        loadChildren: () => import('./pages/copy/copy.module').then(m => m.CopyModule),
      },
      {
        path: 'empresas',
        loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule),
      },
      {
        path: 'organizaciones',
        loadChildren: () => import('./pages/organizaciones/organizaciones.module').then(m => m.OrganizacionesModule),
      },
      {
        path: 'recompensas',
        loadChildren: () => import('./pages/recompensas/recompensas.module').then(m => m.RecompensasModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
      },

    ]
  },

  { path: '**', redirectTo: 'main/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
