import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelManagementRoutingModule } from './personnel-management-routing.module';
import { PersonnelManagementComponent } from './personnel-management.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PersonnelManagementComponent,
    NewEmployeeComponent,
    NewUserComponent,
    ListEmployeesComponent
  ],
  exports:[
    PersonnelManagementComponent,
    NewEmployeeComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    PersonnelManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
  ]
})
export class PersonnelManagementModule { }
