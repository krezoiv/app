import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent,
  canActivate:[AuthGuard],
children:[
  {path:'', component: DashboardComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
