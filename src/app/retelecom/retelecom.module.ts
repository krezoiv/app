import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetelecomRoutingModule } from './retelecom-routing.module';
import { RetelecomNewSaleComponent } from './retelecom-sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './retelecom-sales/retelecom-edit-sale/retelecom-edit-sale.component';
import { RetelecomEditPurchaseComponent } from './retelecom-purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewPurchaseComponent } from './retelecom-purchases/retelecom-new-purchase/retelecom-new-purchase.component';


@NgModule({
  declarations: [
    RetelecomNewSaleComponent,
    RetelecomEditSaleComponent,
    RetelecomEditPurchaseComponent,
    RetelecomNewPurchaseComponent
  ],
  exports:[
    RetelecomNewSaleComponent,
    RetelecomEditSaleComponent,
    RetelecomEditPurchaseComponent,
    RetelecomNewPurchaseComponent
  ],
  imports: [
    CommonModule,
    RetelecomRoutingModule
  ]
})
export class RetelecomModule { }
