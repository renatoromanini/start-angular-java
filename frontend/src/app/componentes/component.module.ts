import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {PesquisaGenericaComponent} from './pesquisa-generica/pesquisa-generica.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [

    PesquisaGenericaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [PesquisaGenericaComponent,]
})
export class ComponentModule {
}
