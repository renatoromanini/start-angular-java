import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Curso} from "../entidade/Curso";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  urlBase: String = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }


  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.urlBase + "/curso");
  }

  saveCurso(curso: Curso): void {
    if (curso.id) {
      this.http.post<Curso>(this.urlBase + "/curso", curso).subscribe(re => {
        console.log('retnro ' + re)
      });
    } else {
      this.http.put<Curso>(this.urlBase + "/curso", curso).subscribe(re => {
        console.log('retnro ' + re)
      });
    }
  }

  deletarCurso(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(this.urlBase + "/curso/" + id,
      {
        observe: 'response',
      });
  }

  getCurso(id: number): Observable<HttpResponse<Curso>> {
    return this.http.get<Curso>(this.urlBase + "/curso/" + id,
      {
        observe: 'response',
      });
  }
}
