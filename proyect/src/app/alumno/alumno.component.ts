import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent{

  sala !: Sala;
  formulario:FormGroup = new FormGroup({
    name: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    apellido: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    rut: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    curso: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    edad: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    prom: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    
  });
  get rut() { return this.formulario.get('rut'); };
  get nombre() { return this.formulario.get('nombre'); };
  get apellido() { return this.formulario.get('apellido'); };
  get edad() { return this.formulario.get('edad'); };
  get curso() { return this.formulario.get('curso'); };
  get prom() { return this.formulario.get('prom'); }
  
  metodo(){
    if(this.formulario.value.name != "" && this.formulario.value.price != ""&& this.formulario.value.description != ""){
          this.datos = `Nombre=${this.formulario.value.name}
          Apellido=${this.formulario.value.apellido}
          Rut=${this.formulario.value.rut}
          Curso=${this.formulario.value.curso}
          Edad=${this.formulario.value.edad}
          Promedio=${this.formulario.value.prom}
          `;
        this.sala = new Sala(this.formulario.value.name, this.formulario.value.apellido, this.formulario.value.rut, this.formulario.value.curso, this.formulario.value.edad, this.formulario.value.prom);
    }
    else{
          //alert("Falta un campo por rellenar")
    }
    
  }
  
}
class Sala  {
  constructor (public name: string, public apellido:string , public rut : string , public curso : string, public edad : number, public prom : string) {

  }

}
