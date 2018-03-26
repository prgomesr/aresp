import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banco } from '../../../../core/model';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class BancoService {


  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'bancos');
  }

  salvar(banco: Banco) {
    return this.http.post(environment.apiUrl + 'bancos', banco);
  }

  editar(banco: Banco) {
    return this.http.put(environment.apiUrl + 'bancos', banco);
  }

  listarPorCodigo(id: any[]) {
    return this.http.get<any []>(environment.apiUrl + 'bancos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'bancos'}/${codigo}`);
  }

}
