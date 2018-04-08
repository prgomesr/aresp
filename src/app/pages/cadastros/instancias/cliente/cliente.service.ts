import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Cliente} from '../../../../core/model';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(environment.apiUrl + 'clientes');
  }

  salvar(dado: Cliente) {
    return this.http.post(environment.apiUrl + 'clientes', dado);
  }

  editar(cliente: Cliente) {
    return this.http.put<any>(environment.apiUrl + 'clientes/' + cliente.id, cliente);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'clientes/' + `${id}`);
  }

  getCep(cep) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`);
  }

}
