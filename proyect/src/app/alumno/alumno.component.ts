import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  estudiantes: any[] = [];
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    rut: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    curso: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    edad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    prom: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

  });
  get rut() { return this.formulario.get('rut'); };
  get nombre() { return this.formulario.get('nombre'); };
  get apellido() { return this.formulario.get('apellido'); };
  get edad() { return this.formulario.get('edad'); };
  get curso() { return this.formulario.get('curso'); };
  get prom() { return this.formulario.get('prom'); }

}
class Estudiante {
  constructor(public name: string, public apellido: string, public rut: string, public curso: string, public edad: number, public prom: string) {

  }

}
