import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AdministrativoComponent } from './administrativo/administrativo.component'



const routes: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'administrativo', component: AdministrativoComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
