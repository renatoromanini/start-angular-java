import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CursoRoutingModule} from './curso-routing.module';
import {ListCursoComponent} from './list-curso/list-curso.component';
import {CursoService} from "../services/curso.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {EditCursoComponent} from './edit-curso/edit-curso.component';
import {ComponentModule} from "../componentes/component.module";
import {RouterModule} from "@angular/router";
import {PipaMaiscula} from "../pipes/PipaMaiscula";


@NgModule({
  declarations: [
    ListCursoComponent,
    EditCursoComponent,
    PipaMaiscula
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CursoRoutingModule,
    ComponentModule
  ],
  providers: [CursoService]
})
export class CursoModule {
}
