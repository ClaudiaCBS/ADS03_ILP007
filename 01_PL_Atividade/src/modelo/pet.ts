import Consumo from "./consumo"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    //inclui Produto
    private produtosConsumidos: Array<Consumo>
    //inclui Servico
    private servicosConsumidos: Array<Consumo>

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    //inclui Produto
    public get getProdutosConsumidos(): Array<Consumo> {
        return this.produtosConsumidos
    }
    //inclui Servico
    public get getServicosConsumidos(): Array<Consumo> {
        return this.servicosConsumidos
    }
}