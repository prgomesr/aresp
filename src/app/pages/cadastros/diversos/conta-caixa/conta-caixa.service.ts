import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContaCaixa } from '../../../../core/model';
import { environment } from '../../../../../environments/environment';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class ContaCaixaService {

  conta = new ContaCaixa();
  constructor(private http: HttpService) { }

  salvar(conta: ContaCaixa) {
    return this.http.post('ContaCaixa', conta);
  }

  editar(conta: ContaCaixa) {
    return this.http.put('ContaCaixa/' + conta.id, conta);
  }

  listarPorCodigo(id: number) {
    return this.http.get('ContaCaixa/' + `${id}`);
  }

  listar() {
    return this.http.get('ContasCaixa');
  }

  excluir(codigo: number) {
    return this.http.delete('ContaCaixa/' + codigo);
  }

}
