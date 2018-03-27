import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Convenio } from '../../../../core/model';

@Injectable()
export class ConvenioService {

  convenio = new Convenio();

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'convenios');
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'convenios'}/${codigo}`);
  }

  salvar(dado: Convenio) {
    return this.http.post(environment.apiUrl + 'convenios', dado);
  }

  editar(dado: Convenio) {
    return this.http.put<any>(environment.apiUrl + 'convenios/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'convenios/' + `${id}`);
  }

}
