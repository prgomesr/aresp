import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import {Pagamento} from '../../../core/model';
import * as moment from 'moment';
import { HttpService } from '../../../shared/http/http.service';

@Injectable()
export class ContasPagarService {

  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('Pagamentos');
  }

  salvar(pagamento: Pagamento) {
    return this.http.post('Pagamento', pagamento);
  }

  listarPorCodigo(id: number) {
    return this.http.get(`Pagamento/${id}`)
      .map((res: any) => {
        const pagamento = res.result as Pagamento;
        this.converterStringParaData([pagamento]);
        return pagamento;
      });
  }

  editar(pagamento: Pagamento) {
    this.converterFormatoDate(pagamento);
    return this.http.put('Pagamento/' + pagamento.id, pagamento)
      .map((res: any) => {
        const pagamentoAlterado = res as Pagamento;
        this.converterStringParaData([pagamentoAlterado]);
        return pagamentoAlterado;
      });
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'pagamentos'}/${codigo}`);
  }

  private converterStringParaData(pagamentos: Pagamento []) {
    for (const pagamento of pagamentos) {
      pagamento.dtCompetencia = moment(pagamento.dtCompetencia, 'YYYY-MM-DD').toDate();
      pagamento.dtVencimento = moment(pagamento.dtVencimento, 'YYYY-MM-DD').toDate();
      if (pagamento.dtPagamento) {
        pagamento.dtPagamento = moment(pagamento.dtPagamento, 'YYYY-MM-DD').toDate();
      }
    }

  }

  private converterFormatoDate(pagamento: Pagamento) {
    if (pagamento.dtCompetencia) {
      pagamento.dtCompetencia = moment(pagamento.dtCompetencia).format('YYYY-MM-DD HH:mm');
    }
    if (pagamento.dtVencimento) {
      pagamento.dtVencimento = moment(pagamento.dtVencimento).format('YYYY-MM-DD HH:mm');
    }
    if (pagamento.dtPagamento) {
      pagamento.dtPagamento = moment(pagamento.dtPagamento).format('YYYY-MM-DD HH:mm');
    }
    if (pagamento.dtEmissao) {
      pagamento.dtEmissao = moment(pagamento.dtEmissao).format('YYYY-MM-DD HH:mm');
    }
  }

}
