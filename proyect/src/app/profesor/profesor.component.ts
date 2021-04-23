import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  lista !: Profesor[];
  
  
  formulario:FormGroup = new FormGroup ({
    rut: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    nombre: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    apellido: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    edad: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    especialidad: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    sueldo: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

  });
  
  
  constructor() { }

  ngOnInit(): void {
    this.lista = [];
    let variable = JSON.parse(localStorage.getItem("elementos") || '{}');
    if(variable!=null)
      for(let elementos of variable)
        this.lista.push(elementos)
    localStorage.clear();

  }
  get rut() { return this.formulario.get('rut'); };
  get nombre() { return this.formulario.get('nombre'); };
  get apellido() { return this.formulario.get('apellido'); };
  get edad() { return this.formulario.get('edad'); };
  get especialidad() { return this.formulario.get('especialidad'); };
  get sueldo() { return this.formulario.get('sueldo'); }


  agregar(){

  }

  eliminar(){

  }
  modificar(){

  }
  guardarModificacion(){}

  addData() {
    let resultFind = this.findCode(this.formulario.controls["rut"].value);
    if (resultFind.result == true) {
    alert("Producto ya existe");
    }
    else {
    if (this.formulario.valid) {
    this.lista.push({
    "rut": this.formulario.controls["rut"].value,
    "nombre":this.formulario.controls["nombre"].value,
    "apellido": this.formulario.controls["apellido"].value,
    "edad": this.formulario.controls["edad"].value,
    "especialidad": this.formulario.controls["especialidad"].value,
    "sueldo": this.formulario.controls["sueldo"].value,
    });
    this.formulario.reset();
    
    }
    
    
    }
    
    //this.formulario.setValue('');
    
    }
    
    findCode(code: string) {
    for (let index = 0; index < this.lista.length; index++){
    
    if (this.lista[index] && this.lista[index].rut === code) {
    
    return { result: true, productIndex: index };
    }
    
    }
    
    
    return { result: false, productIndex: -1 };
    }
    
    deleteByPosition(pos: number) :void{
    if (this.lista[pos]) {
    delete this.lista[pos];
    }
    
    }






}

class Profesor {
  constructor(public rut : string , public nombre:string, public apellido: string , public edad: number,  public especialidad : string , public sueldo : number ){

  }
}