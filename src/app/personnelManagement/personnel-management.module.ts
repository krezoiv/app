import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelManagementRoutingModule } from './personnel-management-routing.module';
import { PersonnelManagementComponent } from './personnel-management.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonnelManagementComponent,
    NewEmployeeComponent,
    NewUserComponent
  ],
  exports:[
    PersonnelManagementComponent,
    NewEmployeeComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    PersonnelManagementRoutingModule,
    SharedModule
  ]
})
export class PersonnelManagementModule { }
