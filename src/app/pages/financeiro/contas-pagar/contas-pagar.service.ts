import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Pagamento } from '../../../core/model';

@Injectable()
export class ContasPagarService {

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'pagamentos');
  }

  salvar(pagamento: Pagamento) {
    return this.http.post(environment.apiUrl + 'pagamentos', pagamento);
  }

  editar(pagamento: Pagamento) {
    return this.http.put<any>(environment.apiUrl + 'pagamentos/' + pagamento.id, pagamento);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'pagamentos/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'pagamentos'}/${codigo}`);
  }

}
