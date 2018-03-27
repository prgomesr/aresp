import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { StatusParcela } from '../../../../core/model';

@Injectable()
export class StatusParcelaService {

  dado = new StatusParcela();
  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'statusParcelas');
  }

  salvar(dado: StatusParcela) {
    return this.http.post(environment.apiUrl + 'statusParcelas', dado);
  }

  editar(dado: StatusParcela) {
    return this.http.put<any>(environment.apiUrl + 'statusParcelas/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'statusParcelas/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'statusParcelas'}/${codigo}`);
  }

}
