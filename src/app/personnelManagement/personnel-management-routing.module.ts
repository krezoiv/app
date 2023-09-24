// Importar los módulos necesarios de Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes relacionados con los empleados, usuarios
import { PersonnelManagementComponent } from './personnel-management.component';

// Importar otros componentes y guardias necesarios
import { AuthGuard } from '../guards/auth.guard';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';

// Definir las rutas para la funcionalidad de Empleados
const routes: Routes = [
  {
    path:'Empleados', // Ruta principal para Redesis
    component: PersonnelManagementComponent, // Componente principal para Redesis
    canActivate: [AuthGuard], // Guardia de autenticación para proteger las rutas
    children:[
      // Rutas secundarias para compras de Redesis
      {path:'', component: PersonnelManagementComponent}, // Ruta por defecto
      {path:'NuevoEmpleado', component: NewEmployeeComponent} // Ruta para crear una nuevo empleado
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configurar las rutas secundarias para el módulo Redesis
  exports: [RouterModule] // Exportar el módulo de enrutamiento para su uso en la aplicación
})
export class PersonnelManagementRoutingModule { }
