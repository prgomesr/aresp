import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { Operadora } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class OperadoraService {

  operadora = new Operadora();

  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('Operadoras');
  }

  salvar(dado: Operadora) {
    return this.http.post('Operadora', dado);
  }

  editar(dado: Operadora) {
    return this.http.put('Operadora/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('Operadora/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('Operadora/' + codigo);
  }

}
