export interface NovoUsuario {

  nome: string;
  email: string;
  cpf: string;
  cidade: {
    nome: string;
  },
  estado: {
    nome: string;
  }
}
