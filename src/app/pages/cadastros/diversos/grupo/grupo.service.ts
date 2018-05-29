import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import {GrupoRecebimento} from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class GrupoService {

  grupo = new GrupoRecebimento();

  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('GruposRecebimento');
  }

  salvar(dado: GrupoRecebimento) {
    return this.http.post('GrupoRecebimento', dado);
  }

  editar(dado: GrupoRecebimento) {
    return this.http.put('GrupoRecebimento/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('GrupoRecebimento/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('GrupoRecebimento/' + codigo);
  }

}
