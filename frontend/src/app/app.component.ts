import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';

  private apiURL = "https://api.github.com/";
  public message: string = "Não inicializado";
  public response: string = "";

  constructor(private httpClient: HttpClient) {
  }

  async fetchData() {
    this.message = "Buscando..";
    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(2000))
      .toPromise();
    this.message = "finalizado";
  }

  fetchDataNaoSincronizado() {
    this.message = "Buscando..";
    this.response = "";
    this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(2000)).subscribe(res => {
      this.response = res;
    });
    this.message = "finalizado";
  }
}
