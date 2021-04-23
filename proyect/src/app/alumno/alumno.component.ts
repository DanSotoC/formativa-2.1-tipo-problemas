import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent{
  datos: string = "";
  sala !: Sala;
  formulario = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    rut: new FormControl('', Validators.required),
    curso: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    prom: new FormControl('',Validators.required),
    
  });

  metodo(){
    if(this.formulario.value.code != "" && this.formulario.value.name != "" && this.formulario.value.price != ""&& this.formulario.value.description != ""){
        this.datos = `    Id=${this.formulario.value.id}
                          Nombre=${this.formulario.value.name}
                          Apellido=${this.formulario.value.apellido}
                          Rut=${this.formulario.value.rut}
                          Curso=${this.formulario.value.curso}
                          Edad=${this.formulario.value.edad}
                          Promedio=${this.formulario.value.prom}
                          `;
        this.sala = new Sala(this.formulario.value.code,this.formulario.value.name,this.formulario.value.price,this.formulario.value.description);
    }
    else{
          alert("Complete Todos los campos")
    }
    
  }
}
class Sala  {
  constructor ( public code: number, public name: string, public price:number , public description : string) {

  }
}