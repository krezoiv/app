import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  empleadoForm: FormGroup;

  // Opciones para los menús desplegables
  tiposEmpleado = ['Tipo 1', 'Tipo 2', 'Tipo 3'];
  statuses = ['Activo', 'Inactivo'];
  cargos = ['Cargo 1', 'Cargo 2', 'Cargo 3'];
  sedes = ['Sede 1', 'Sede 2', 'Sede 3'];
  municipios = ['Municipio 1', 'Municipio 2', 'Municipio 3'];

  constructor(private fb: FormBuilder) {
    this.empleadoForm = this.fb.group({
      codigo: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      fechaAlta: ['', Validators.required],
      idTipoEmpleado: ['', Validators.required],
      idStatus: ['', Validators.required],
      idCargo: ['', Validators.required],
      idSede: ['', Validators.required],
      idMunicipio: ['', Validators.required],
      referenciaDireccion: [''],
      cuentaBAC: [''],
      cuentaBAM: ['']
    });
  }

  onSubmit() {
    if (this.empleadoForm.valid) {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log(this.empleadoForm.value);
    }
  }
}
