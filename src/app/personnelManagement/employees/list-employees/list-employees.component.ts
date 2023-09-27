import { Component, OnInit } from '@angular/core';
import { EmployeesModel } from 'src/app/data/models/employees.models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: EmployeesModel[] | null = null; // Inicializado como null o con un valor de carga

  constructor(private _employeesService: EmployeesService) {}

  ngOnInit() {
    // Se ejecuta cuando el componente se inicializa.
    this.getEmployeesList();
  }

  // Método para obtener la lista de empleados desde el servicio.
  getEmployeesList() {
    // Llama al servicio para obtener la lista de empleados.
    this._employeesService.getEmployees().subscribe(
      (data) => {
        // Cuando se completa con éxito la solicitud HTTP.
        this.employees = data; // Asigna los datos a la propiedad 'employees'.
        console.log('Lista de empleados cargada con éxito:', data);
      },
      (error) => {
        // Cuando ocurre un error en la solicitud HTTP.
        console.error('Error al obtener la lista de empleados:', error);
        // Aquí puedes agregar una notificación o manejo de errores adicional si es necesario.
      }
    );
  }
}