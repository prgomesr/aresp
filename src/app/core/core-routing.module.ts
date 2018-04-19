import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'financeiro/contas-pagar', loadChildren: '../pages/financeiro/contas-pagar/contas-pagar.module#ContasPagarModule' },
      { path: 'financeiro/contas-receber', loadChildren: '../pages/financeiro/contas-receber/contas-receber.module#ContasReceberModule' },
      { path: 'financeiro/gera-remessa', loadChildren: '../pages/financeiro/gera-remessa/gera-remessa.module#GeraRemessaModule' },
      { path: 'financeiro/caixa-diario', loadChildren: '../pages/financeiro/caixa-diario/caixa-diario.module#CaixaDiarioModule' },
      { path: 'financeiro/cheque', loadChildren: '../pages/financeiro/cheque/cheque.module#ChequeModule' },
      { path: 'instancias/cliente', loadChildren: '../pages/cadastros/instancias/cliente/cliente.module#ClienteModule' },
      { path: 'instancias/empresa', loadChildren: '../pages/cadastros/instancias/empresa/empresa.module#EmpresaModule' },
      { path: 'instancias/fornecedor', loadChildren: '../pages/cadastros/instancias/fornecedor/fornecedor.module#FornecedorModule' },
      { path: 'diversos/agencia', loadChildren: '../pages/cadastros/diversos/agencia/agencia.module#AgenciaModule' },
      { path: 'diversos/banco', loadChildren: '../pages/cadastros/diversos/banco/banco.module#BancoModule' },
      { path: 'diversos/convenio', loadChildren: '../pages/cadastros/diversos/convenio/convenio.module#ConvenioModule' },
      { path: 'diversos/conta-caixa', loadChildren: '../pages/cadastros/diversos/conta-caixa/conta-caixa.module#ContaCaixaModule' },
      { path: 'diversos/grupo', loadChildren: '../pages/cadastros/diversos/grupo/grupo.module#GrupoModule' },
      { path: 'diversos/operadora', loadChildren: '../pages/cadastros/diversos/operadora/operadora.module#OperadoraModule' },
      { path: 'diversos/secretaria', loadChildren: '../pages/cadastros/diversos/secretaria/secretaria.module#SecretariaModule' },
      { path: 'diversos/status-parcela', loadChildren: '../pages/cadastros/diversos/status-parcela/status-parcela.module' +
        '#StatusParcelaModule' },
      { path: 'diversos/categoria-pagamento', loadChildren: '../pages/cadastros/diversos/categoria-pagamento/categoria-pagamento.module' +
        '#CategoriaPagamentoModule' },
      { path: 'diversos/categoria-recebimento', loadChildren: '../pages/cadastros/diversos/categoria-recebimento/categoria-recebimento.' +
        'module' + '#CategoriaRecebimentoModule' },
      { path: 'diversos/tipo-recebimento', loadChildren: '../pages/cadastros/diversos/tipo-recebimento/tipo-recebimento.module' +
        '#TipoRecebimentoModule' },
      { path: 'diversos/tipo-socio', loadChildren: '../pages/cadastros/diversos/tipo-socio/tipo-socio.module#TipoSocioModule' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
