import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContaCaixa } from '../../../../core/model';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ContaCaixaService {

  conta = new ContaCaixa();
  constructor(private http: HttpClient) { }

  salvar(conta: ContaCaixa) {
    return this.http.post(environment.apiUrl + 'contas', conta);
  }

  editar(conta: ContaCaixa) {
    return this.http.put<any>(environment.apiUrl + 'contas/' + conta.id, conta);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'contas/' + `${id}`);
  }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'contas');
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'contas'}/${codigo}`);
  }

}
