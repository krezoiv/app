import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { RedesisRoutingModule } from './redesis/redesis-routing.module';
import { RetelecomRoutingModule } from './retelecom/retelecom-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth/authentication/login', pathMatch: 'full' }, // Ruta por defecto
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'retelecom',
    loadChildren: () =>
      import('./retelecom/retelecom.module').then((m) => m.RetelecomModule),
  },
  {
    path: 'redesis',
    loadChildren: () =>
      import('./redesis/redesis.module').then((m) => m.RedesisModule),
  },

  // Otras rutas y configuraciones de enrutamiento según sea necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    HomeRoutingModule,
    RedesisRoutingModule,
    RetelecomRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
