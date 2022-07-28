import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AbstractListComponent} from "../AbstractListComponent";

@Component({
  selector: 'app-pesquisa-generica',
  templateUrl: './pesquisa-generica.component.html',
  styleUrls: ['./pesquisa-generica.component.css']
})
export class PesquisaGenericaComponent implements OnInit {

  @Input()
  abstractListComponent: AbstractListComponent<any> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.abstractListComponent?.buscarTodos();
  }

}
