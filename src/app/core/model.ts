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

export class Conta {
  id: number;
  agencia: string;
  conta: string;
  tipo: string;
  descricao: string;
}

export class Cliente {
  id: number;
}

export class Empresa {
  id: number;
  conta = new Conta();
}

export class StatusParcela {
  id: number;
  situacao: string;
  descricao: string;
}

export class Recebimento {
  descricao: string;
  grupo = new GrupoRecebimento();
  categoria = new CategoriaRecebimento();
  conta = new Conta();
  emissao: Date;
  competencia: Date;
  vencimento: Date;
  recebimento: Date;
  recebido: Date;
  cliente = new Cliente();
  valor: string;
  referecia: string;
  numDocumento: string;
  nossoNumero: string;
  situacao = new StatusParcela();
}
