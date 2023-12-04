export class CreateClienteDto {
    nome : string
    nomeSocial : string
    cpf : string
    rgs : Rg[]
    telefones : Telefone[]
    pets : PetI[]
}

export class Rg {
    rg: string
    dataEmissao: Date
} 

export class Telefone {
    ddd: string
    telefone: string
}

export class PetI {
    nome : string
    raca : string
    genero : string
    tipo : string
}