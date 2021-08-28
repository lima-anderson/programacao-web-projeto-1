import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProfessoresComponent } from './cadastrar-professores/cadastrar-professores.component';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CadastrarProfessoresComponent,
    ListarProfessoresComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        RouterModule
    ]
})
export class ProfessoresModule { }
