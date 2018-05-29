import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Convenio } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class ConvenioService {

  convenio = new Convenio();

  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('Convenios');
  }

  excluir(codigo: number) {
    return this.http.delete('Convenio/' + codigo);
  }

  salvar(dado: Convenio) {
    return this.http.post('Convenio', dado);
  }

  editar(dado: Convenio) {
    return this.http.put('Convenio/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('Convenio/' + `${id}`);
  }

}
