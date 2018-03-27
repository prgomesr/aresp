import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { CategoriaRecebimento } from '../../../../core/model';

@Injectable()
export class CategoriaRecebimentoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'categoriasRecebimentos');
  }

  salvar(categoria: CategoriaRecebimento) {
    return this.http.post(environment.apiUrl + 'categoriasRecebimentos', categoria);
  }

  editar(categoria: CategoriaRecebimento) {
    return this.http.put<any>(environment.apiUrl + 'categoriasRecebimentos/' + categoria.id, categoria);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'categoriasRecebimentos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'categoriasRecebimentos'}/${codigo}`);
  }

}
