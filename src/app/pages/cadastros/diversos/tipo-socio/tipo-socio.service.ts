import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { TipoSocio } from '../../../../core/model';

@Injectable()
export class TipoSocioService {

  tipo = new TipoSocio();
  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'tiposSocios');
  }

  salvar(dado: TipoSocio) {
    return this.http.post(environment.apiUrl + 'tiposSocios', dado);
  }

  editar(dado: TipoSocio) {
    return this.http.put<any>(environment.apiUrl + 'tiposSocios/' + dado.id, dado);
  }

  listarPorCodigo(id: number) {
    return this.http.get<any>(environment.apiUrl + 'tiposSocios/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'tiposSocios'}/${codigo}`);
  }

}
