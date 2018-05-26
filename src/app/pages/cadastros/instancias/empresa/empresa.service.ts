import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import { Empresa } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class EmpresaService {

  constructor(private http: HttpService) { }

  listar() {
    return this.http.get('Empresas');
  }

  listarPorCodigo(codigo: number) {
    return this.http.get('Empresa/' + codigo);
  }

  salvar(empresa: Empresa) {
    return this.http.post('Empresa', empresa);
  }

  editar(empresa: Empresa) {
    return this.http.put('Empresa/' + empresa.id, empresa);
  }

  excluir(codigo: number) {
    return this.http.delete('Empresa/' + codigo);
  }

}
