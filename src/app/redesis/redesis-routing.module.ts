import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedesisNewPurchaseComponent } from './redesis-purchases/redesis-new-purchase/redesis-new-purchase.component';
import { RedesisEditPurchaseComponent } from './redesis-purchases/redesis-edit-purchase/redesis-edit-purchase.component';
import { RedesisNewSaleComponent } from './redesis-sales/redesis-new-sale/redesis-new-sale.component';
import { RedesisEditSaleComponent } from './redesis-sales/redesis-edit-sale/redesis-edit-sale.component';
import { RedesisComponent } from './redesis.component';
import { HomeComponent } from '../home/home.component';
import { RedesisDashboardComponent } from './redesis-dashboard/redesis-dashboard.component';

/*
const routes: Routes = [
  {
    path: 'Compras',
    children:[
      {path: 'RedesisNuevaCompra', component: RedesisNewPurchaseComponent},
      {path: 'RedesisEditarCompra', component: RedesisEditPurchaseComponent},
    ],
  },
  {
    path: 'Ventas',
    children:[
      {path: 'RedesisNuevaVenta', component: RedesisNewSaleComponent},
      {path: 'RedesisEditarVenta', component: RedesisEditSaleComponent}
    ],
  },
];
*/

const routes: Routes = [
  {
    path:'Redesis/Compras', component:HomeComponent,
    children:[
      { path: '', component: RedesisDashboardComponent },
      {path: 'ComprasRedesisNuevaCompra', component: RedesisNewPurchaseComponent},
      {path: 'RedesisEditarCompra', component: RedesisEditPurchaseComponent},
    ]
  },
  {
    path:'RedesisVentas', component:HomeComponent,
    children:[
      { path: '', component: RedesisDashboardComponent },
      {path: 'RedesisNuevaVenta', component: RedesisNewSaleComponent},
      {path: 'RedesisEditarVenta', component: RedesisEditSaleComponent}
    ]
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesisRoutingModule { }
