import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { TipoRecebimento } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class TipoRecebimentoService {

  tipo = new TipoRecebimento();

  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('TiposRecebimento');
  }

  salvar(dado: TipoRecebimento) {
    return this.http.post('TipoRecebimento', dado);
  }

  editar(dado: TipoRecebimento) {
    return this.http.put('TipoRecebimento/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('TipoRecebimento/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('TipoRecebimento/' + codigo);
  }

}
