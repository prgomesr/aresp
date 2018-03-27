import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { TipoRecebimento } from '../../../../core/model';

@Injectable()
export class TipoRecebimentoService {

  tipo = new TipoRecebimento();

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'tiposRecebimentos');
  }

  salvar(dado: TipoRecebimento) {
    return this.http.post(environment.apiUrl + 'tiposRecebimentos', dado);
  }

  editar(dado: TipoRecebimento) {
    return this.http.put<any>(environment.apiUrl + 'tiposRecebimentos/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'tiposRecebimentos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'tiposRecebimentos'}/${codigo}`);
  }

}
