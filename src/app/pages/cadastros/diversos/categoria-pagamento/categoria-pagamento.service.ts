import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { CategoriaPagamento } from '../../../../core/model';

@Injectable()
export class CategoriaPagamentoService {

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'categoriasPagamentos');
  }

  salvar(categoria: CategoriaPagamento) {
    return this.http.post(environment.apiUrl + 'categoriasPagamentos', categoria);
  }

  editar(categoria: CategoriaPagamento) {
    return this.http.put<any>(environment.apiUrl + 'categoriasPagamentos/' + categoria.id, categoria);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'categoriasPagamentos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'categoriasPagamentos'}/${codigo}`);
  }

}
