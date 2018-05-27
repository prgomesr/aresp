import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { StatusParcela } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class StatusParcelaService {

  dado = new StatusParcela();
  constructor(private http: HttpService) { }

  listar () {
    return this.http.get('StatusParcelas');
  }

  salvar(dado: StatusParcela) {
    return this.http.post('StatusParcela', dado);
  }

  editar(dado: StatusParcela) {
    return this.http.put('StatusParcela/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get('StatusParcela/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete('StatusParcela/' + codigo);
  }

}
