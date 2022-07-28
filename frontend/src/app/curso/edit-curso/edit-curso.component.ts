import {Component, OnInit} from '@angular/core';
import {CursoService} from "../../services/curso.service";
import {Curso} from "../../entidade/Curso";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso?: Curso;

  constructor(private cursoService: CursoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.params) {
      this.route.params.subscribe((params) => {
        const id = params['id'];
        this.cursoService.getCurso(id).subscribe(resp => {
          this.curso = resp.body!;
        })
      })
    }
    this.curso = new Curso();
  }

  save(): void {
    this.cursoService.saveCurso(this.curso!);
    this.router.navigate(['/cursos']);
  }
}
