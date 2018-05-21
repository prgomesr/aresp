import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { CategoriaRecebimento } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';

@Injectable()
export class CategoriaRecebimentoService {

  constructor(private http: HttpService) { }

  listar() {
    return this.http.get('CategoriasRecebimento');
  }

  salvar(categoria: CategoriaRecebimento) {
    return this.http.post('CategoriaRecebimento', categoria);
  }

  editar(categoria: CategoriaRecebimento) {
    return this.http.put('CategoriaRecebimento/' + categoria.id, categoria);
  }

  listarPorCodigo(id: number) {
    return this.http.get('CategoriaRecebimento/' + `${id}`);
  }

  excluir(codigo: number) {
    return this.http.delete( 'CategoriaRecebimento/'+codigo);
  }

}
