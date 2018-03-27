import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Operadora } from '../../../../core/model';

@Injectable()
export class OperadoraService {

  operadora = new Operadora();

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'operadoras');
  }

  salvar(dado: Operadora) {
    return this.http.post(environment.apiUrl + 'operadoras', dado);
  }

  editar(dado: Operadora) {
    return this.http.put<any>(environment.apiUrl + 'operadoras/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'operadoras/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'operadoras'}/${codigo}`);
  }

}
