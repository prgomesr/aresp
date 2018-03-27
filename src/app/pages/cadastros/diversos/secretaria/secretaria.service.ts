import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Secretaria } from '../../../../core/model';

@Injectable()
export class SecretariaService {

  secretaria = new Secretaria();
  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'secretarias');
  }

  salvar(dado: Secretaria) {
    return this.http.post(environment.apiUrl + 'secretarias', dado);
  }

  editar(dado: Secretaria) {
    return this.http.put<any>(environment.apiUrl + 'secretarias/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'secretarias/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'secretarias'}/${codigo}`);
  }

}
