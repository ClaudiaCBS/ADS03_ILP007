import Consumo from "./consumo"
import CPF from "./cpf"
import Pet from "./pet"
import RG from "./rg"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    //troquei Produto - Consumo
    private produtosConsumidos: Array<Consumo>
    //troquei Servico - Consumo
    private servicosConsumidos: Array<Consumo>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    //troquei Produto - Consumo
    public get getProdutosConsumidos(): Array<Consumo> {
        return this.produtosConsumidos
    }
    //troquei Servico - Consumo
    public get getServicosConsumidos(): Array<Consumo> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
}