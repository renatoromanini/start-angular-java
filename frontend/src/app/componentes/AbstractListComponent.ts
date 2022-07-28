import {PesquisaGenerica} from "../entidade/PesquisaGenerica";

export abstract class AbstractListComponent<T> {

  lista: T[] = [];
  pesquisaGenerica: PesquisaGenerica | undefined;

  constructor() {
  }

  abstract buscarTodos(): void;
  abstract remover(id:number): void;

  getValorColuna(ent: any, coluna: string): string {
    if (coluna.includes('.')) {
      let strings = coluna.split('.');
      if (strings.length === 2) {
        return ent[strings[0]][strings[1]];
      }
      return ent[coluna];
    } else {
      return ent[coluna];
    }
  }

  get(): AbstractListComponent<T> {
    return this;
  }
}
