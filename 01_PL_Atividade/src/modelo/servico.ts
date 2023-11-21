export default class Servico {
    public nome!: string
    //inseri preco e construtor
    public preco!: number

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}