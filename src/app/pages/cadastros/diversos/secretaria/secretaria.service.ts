import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Secretaria } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class SecretariaService {

  secretaria = new Secretaria();
  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('Secretarias');
  }

  salvar(dado: Secretaria) {
    return this.http.post('Secretaria', dado);
  }

  editar(dado: Secretaria) {
    return this.http.put('Secretaria/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('Secretaria/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('Secretaria/' + codigo);
  }

}
