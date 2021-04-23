import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    AlumnoComponent,
    AdministrativoComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
