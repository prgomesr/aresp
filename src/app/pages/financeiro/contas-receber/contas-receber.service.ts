import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {Cliente, Recebimento} from '../../../core/model';
import * as moment from 'moment';
import {HttpService} from '../../../shared/http/http.service';

@Injectable()
export class ContasReceberService {

  constructor(private http: HttpService) { }

  listar() {
    return this.http.get(`Recebimentos`);
  }

  excluir(codigo: number) {
    return this.http.delete(`Recebimento/${codigo}`);
  }

  salvar(recebimento: Recebimento) {
    this.converterFormatoDate(recebimento);
    return this.http.post(`Recebimento/`, recebimento);
  }

  listarPorCodigo(id: number) {
    return this.http.get(`Recebimento/${id}`)
      .map((res:any) => {
        const recebimento = res.result as Recebimento;
        this.converterStringParaData([recebimento]);
        return recebimento;
      });
  }

  editar(recebimento: Recebimento) {
    this.converterFormatoDate(recebimento);
    return this.http.put('Recebimento/' + recebimento.id, recebimento)
      .map((res: any) => {
        const recebimentoAlterado = res as Recebimento;
        this.converterStringParaData([recebimentoAlterado]);
        return recebimentoAlterado;
      });
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

  private converterFormatoDate(recebimento: Recebimento) {
    if (recebimento.dtCompetencia) {
      recebimento.dtCompetencia = moment(recebimento.dtCompetencia).format('YYYY-MM-DD HH:mm');
    }
    if (recebimento.dtVencimento) {
      recebimento.dtVencimento = moment(recebimento.dtVencimento).format('YYYY-MM-DD HH:mm');
    }
    if (recebimento.dtRecebimento) {
      recebimento.dtRecebimento = moment(recebimento.dtRecebimento).format('YYYY-MM-DD HH:mm');
    }
    if (recebimento.dtEmissao) {
      recebimento.dtEmissao = moment(recebimento.dtEmissao).format('YYYY-MM-DD HH:mm');
    }
  }

}
