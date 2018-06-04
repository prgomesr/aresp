export class Banco {
  id: number;
  nome: string;
  numero: number;
  telefone: string;
}

export class GrupoRecebimento {
  id: number;
  nome: string;
}

export class CategoriaRecebimento {
  id: number;
  nome: string;
}

export class CategoriaPagamento {
  id: number;
  nome: string;
}

export class Convenio {
  id: number;
  nome: string;
  numero: number;
  telefone: string;
  observacao: string;
  conta = new ContaCaixa();
}

export class Operadora {
  id: number;
  nome: string;
}

export class Secretaria {
  id: number;
  nome: string;
}

export class Dependente {
  id: number;
  nome: string;
  rg: string;
  parentesco: string;
  nascimento: Date;

  constructor(id?: number,
              nome?: string,
              rg?: string,
              parentesco?: string,
              nascimento?: Date) {
    this.id = id;
    this.nome = nome;
    this.parentesco = parentesco;
    this.rg = rg;
    this.nascimento = nascimento;
  }
}

export class Endereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export class Telefone {
  id: number;
  numero: string;
  tipo: string;

  constructor(id?: number,
              numero?: string,
              tipo?: string) {
    this.id = id;
    this.numero = numero;
    this.tipo = tipo;
  }
}

export class DadosBancarios {
  id: number;
  tipo = 'BOLETO';
  agencia: string;
  agenciaDigito: string;
  conta: string;
  contaDigito: string;
  numeroCartao: string;
  mes: string;
  ano: string;
  operadora = new Operadora();
  banco = new Banco();
}

export class Cancelamento {
  id: number;
  dataCancelamento: Date;
  dataPedido: Date;
  motivo: string;
  obs: string;
}

export class Cliente {
  id: number;
  ativo = true;
  cadastro = new Date();
  entrada: Date;
  cpf: string;
  rg: string;
  nome: string;
  sexo: string;
  pai: string;
  mae: string;
  estadoCivil: string;
  obs: string;
  email: string;
  nascimento: Date;
  numAverbacao: string;
  matricula: string;
  situacao = 'EM DIA';
  grupo = new GrupoRecebimento();
  endereco = new Endereco();
  tipo = new TipoSocio();
  cancelado = new Cancelamento();
  secretaria = new Secretaria();
  dadosBancarios = new DadosBancarios();
  telefones = new Array<Telefone>();
  dependentes = new Array<Dependente>();
}

export class Empresa {
  id: number;
  ativo = true;
  razao: string;
  fantasia: string;
  cnpj: string;
}

export class TipoRecebimento {
  id: number;
  nome: string;
}

export class TipoSocio {
  id: number;
  nome: string;
}

export class StatusParcela {
  id: number;
  nome: string;
  descricao: string;
}

export class Recebimento {
  id: number;
  descricao: string;
  dtEmissao = new Date();
  dtCompetencia: Date;
  dtVencimento: Date;
  dtRecebimento: Date;
  valor: number;
  ocorrencia = 1;
  numDocumento: string;
  nossoNumero: string;
  remessaGerada = false;
  valorRecebido: number;
  grupo = new GrupoRecebimento();
  categoria = new CategoriaRecebimento();
  conta = new ContaCaixa();
  cliente = new Cliente();
  situacao = new StatusParcela();
}

export class Pagamento {
  id: number;
  descricao: string;
  dtEmissao = new Date();
  dtCompetencia: Date;
  dtVencimento: Date;
  dtPagamento: Date;
  valor: number;
  valorPago: number;
  parcela: number;
  numNf: string;
  documento: string;
  chequeEmitido = false;
  categoria = new CategoriaPagamento();
  conta = new ContaCaixa();
  fornecedor = new Fornecedor();
  situacao = new StatusParcela();
  cheque = new Cheque();
}

export class Fornecedor {
  id: number;
  ativo = true;
  cnpj: string;
  razao: string;
  fantasia: string;
  email: string;
  telefone: string;
  contato: string;
  cadastro = new Date();
}

export class ContaCaixa {
  id: number;
  numero: string;
  digito: number;
  nome: string;
  tipo: string;
  taxa_multa: number;
  taxa_juros: number;
  empresa = new Empresa();
  agencia = new Agencia();
}

export class Agencia {
  id: number;
  numero: string;
  digito: number;
  telefone: string;
  gerente: string;
  banco = new Banco();
}

export class Cheque {
  id: number;
  numero: string;
  nominal: string;
  valor: number;
  bom_para: Date;
  data_compensacao: Date;
}
