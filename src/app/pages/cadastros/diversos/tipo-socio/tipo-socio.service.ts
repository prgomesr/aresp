import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { TipoSocio } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class TipoSocioService {

  tipo = new TipoSocio();
  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('tiposSocio');
  }

  salvar(dado: TipoSocio) {
    return this.http.post('tipoSocio', dado);
  }

  editar(dado: TipoSocio) {
    return this.http.put('tipoSocio/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('tipoSocio/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('tipoSocio/' + codigo);
  }

}
