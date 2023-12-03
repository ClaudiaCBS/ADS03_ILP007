export class CreateClienteDto {
    nome : string
    nomeSocial : string
    cpf : string
    rgs : Rg[]
    telefones : Telefone[]
}

export class Rg {
    rg: string
    dataEmissao: Date
} 

export class Telefone {
    ddd: string
    telefone: string
}