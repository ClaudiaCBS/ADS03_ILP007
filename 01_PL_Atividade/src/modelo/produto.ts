export default class Produto {
    public nome!: string
    //inseri preco e o construtor
    public preco!: number

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}