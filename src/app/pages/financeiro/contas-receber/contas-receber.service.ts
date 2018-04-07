import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {Recebimento} from '../../../core/model';
import * as moment from 'moment';

@Injectable()
export class ContasReceberService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any []>(`${environment.apiUrl}recebimentos`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl}recebimentos/${codigo}`);
  }

  salvar(recebimento: Recebimento) {
    return this.http.post(`${environment.apiUrl}recebimentos/`, recebimento);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(`${environment.apiUrl}recebimentos/${id}`);
  }

  editar(recebimento: Recebimento) {
    return this.http.put<any>(environment.apiUrl + 'recebimentos/' + recebimento.id, recebimento);
  }

  private converterStringParaData(recebimentos: Recebimento []) {
    for (const recebimento of recebimentos) {
      recebimento.dtCompetencia = moment(recebimento.dtCompetencia, 'YYYY-MM-DD').toDate();
      recebimento.dtVencimento = moment(recebimento.dtVencimento, 'YYYY-MM-DD').toDate();
      if (recebimento.dtRecebimento) {
        recebimento.dtRecebimento = moment(recebimento.dtRecebimento, 'YYYY-MM-DD').toDate();
      }
    }

  }

}
