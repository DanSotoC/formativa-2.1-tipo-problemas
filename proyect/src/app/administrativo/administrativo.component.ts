import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  admin :Array<Persona> =[];

  editMode: boolean = false;
  editId = -1;
  formulario = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    job: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    salary: new FormControl('', [Validators.required,Validators.min(3)]),
  })

  constructor() {

  }

  ngOnInit(): void {
  }

  get name() {
    return this.formulario.get('name');
  
  }
  get rut() {
    return this.formulario.get('rut');
  
  }
    get salary() {
    return this.formulario.get('salary');
  
  }

    get job() {
    return this.formulario.get('job');
  
  }
    get lastname() {
    return this.formulario.get('lastname');
  
  }

  addData() {
    let resultFind = this.findCode(this.formulario.controls["rut"].value);
    if (resultFind.result == true) {
      alert("Producto ya existe");
    }
    else {
      if (this.formulario.valid) {
        this.admin.push({
        "rut": this.formulario.controls["rut"].value,
        "name":this.formulario.controls["name"].value,
        "lastname": this.formulario.controls["lastname"].value,
        "job": this.formulario.controls["job"].value,
        "salary": this.formulario.controls["salary"].value
      });
      this.formulario.reset();
        
      }


    }

     //this.formulario.setValue('');

  }

  findCode(code: string) {
    for (let index = 0; index < this.admin.length; index++){
          
          if (this.admin[index] && this.admin[index].rut === code) {
          
            return { result: true, productIndex: index };
          }
    
        }


    return { result: false, productIndex: -1 };
  }

  deleteByPosition(pos: number) :void{
    if (this.admin[pos]) {
      delete this.admin[pos];
    } 
  }




}



class Persona{
  rut: String;
  name: String;
  lastname: String;
  job: Number;
  salary: String;
  constructor(rut: String, name: String, description: String, price: Number, code: String) {
    this.rut = rut;
    this.name = name;
    this.lastname = description;
    this.job = price;
    this.salary = code;
  }
}
