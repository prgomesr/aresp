import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import {GrupoRecebimento} from '../../../../core/model';

@Injectable()
export class GrupoService {

  grupo = new GrupoRecebimento();

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'grupos');
  }

  salvar(dado: GrupoRecebimento) {
    return this.http.post(environment.apiUrl + 'grupos', dado);
  }

  editar(dado: GrupoRecebimento) {
    return this.http.put<any>(environment.apiUrl + 'grupos/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'grupos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'grupos'}/${codigo}`);
  }

}
