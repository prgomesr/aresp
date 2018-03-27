import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Fornecedor } from '../../../../core/model';

@Injectable()
export class FornecedorService {

  fornecedor = new Fornecedor();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'fornecedores');
  }

  salvar(fornecedor: Fornecedor) {
    return this.http.post(environment.apiUrl + 'fornecedores', fornecedor);
  }

  editar(fornecedor: Fornecedor) {
    return this.http.put<any>(environment.apiUrl + 'fornecedores/' + fornecedor.id, fornecedor);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'fornecedores/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'fornecedores'}/${codigo}`);
  }

}
