import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agencia } from '../../../../core/model';
import { environment } from '../../../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AgenciaService {
  agencia = new Agencia();
  constructor(private http: HttpClient) { }

  salvar(agencia: Agencia) {
    return this.http.post(environment.apiUrl + 'agencias', agencia);
  }

  editar(agencia: Agencia) {
    return this.http.put<any>(environment.apiUrl + 'agencias/' + agencia.id, agencia);
  }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'agencias');
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'agencias/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'agencias'}/${codigo}`);
  }

}
