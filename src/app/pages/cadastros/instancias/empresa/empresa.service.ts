import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import { Empresa } from '../../../../core/model';

@Injectable()
export class EmpresaService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any []>(environment.apiUrl + 'empresas');
  }

  listarPorCodigo(codigo: number) {
    return this.http.get<any>(environment.apiUrl + 'empresas/' + codigo);
  }

  salvar(empresa: Empresa) {
    return this.http.post(environment.apiUrl + 'empresas', empresa);
  }

  editar(empresa: Empresa) {
    return this.http.put<any>(environment.apiUrl + 'empresas/' + empresa.id, empresa);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'empresas'}/${codigo}`);
  }

}
