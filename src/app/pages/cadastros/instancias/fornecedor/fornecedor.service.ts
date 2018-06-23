import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import {Fornecedor} from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';
import * as moment from 'moment';

@Injectable()
export class FornecedorService {

  fornecedor = new Fornecedor();

  constructor(private http: HttpService) { }

  listar() {
    return this.http.get('Fornecedores');
  }

  salvar(fornecedor: Fornecedor) {
    return this.http.post('Fornecedor', fornecedor);
  }

  editar(fornecedor: Fornecedor) {
    return this.http.put('Fornecedor/' + fornecedor.id, fornecedor);
  }

  listarPorCodigo(id: number) {
    return this.http.get('Fornecedor/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('Fornecedor/' + codigo);
  }

  private converterFormatoDate(fornecedor: Fornecedor) {
    if (fornecedor.cadastro) {
      fornecedor.cadastro = moment(fornecedor.cadastro).format('YYYY-MM-DD HH:mm');
    }
  }

}
