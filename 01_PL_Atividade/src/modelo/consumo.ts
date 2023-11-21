//criei essa classe
export default class Consumo {
    public nome!: string
    public valor!: number
    public quantidade!: number
    public dataConsumo!: Date


    constructor(nome: string, valor: number, quantidade: number){
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.dataConsumo = new Date();
    }
}