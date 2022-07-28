import {Component, OnInit} from '@angular/core';
import {CursoService} from "../../services/curso.service";
import {Curso} from "../../entidade/Curso";
import {AbstractListComponent} from "../../componentes/AbstractListComponent";
import {PesquisaGenerica} from "../../entidade/PesquisaGenerica";

@Component({
  selector: 'app-list-curso',
  templateUrl: './list-curso.component.html',
  styleUrls: ['./list-curso.component.css']
})
export class ListCursoComponent extends AbstractListComponent<Curso> implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {
    super();
  }

  ngOnInit(): void {
    this.pesquisaGenerica = new PesquisaGenerica(
      ['Id', 'Nome'],
      ['id', 'nome'],
      'Lista de Curso',
      '/cursos/new',
      '/cursos/edit');

     this.cursoService.getCursos().subscribe(e => {
       this.cursos = e;
     })
  }

  removerCurso(curso: Curso): void {
    this.cursoService.deletarCurso(curso.id!).subscribe(res => {
      this.cursoService.getCursos().subscribe(e => {
        this.cursos = e;
      })
    });
  }

  buscarTodos(): void {
    this.cursoService.getCursos().subscribe(e => {
      this.lista = e;
    })
  }

  remover(id: number) {
    this.cursoService.deletarCurso(id).subscribe(res => {
      this.buscarTodos();
    });
  }
}
