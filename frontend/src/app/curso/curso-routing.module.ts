import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCursoComponent} from "./list-curso/list-curso.component";
import {EditCursoComponent} from "./edit-curso/edit-curso.component";

const routes: Routes = [
  {path: 'cursos', component: ListCursoComponent},
  {path: 'cursos/new', component: EditCursoComponent},
  {path: 'cursos/edit/:id', component: EditCursoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {
}
