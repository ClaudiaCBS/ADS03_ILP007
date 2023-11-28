export default class Servico {
    
    public nome!: string
    //inseri preco e construtor
    public preco!: number

    //criando uma propriedade para o servico
    public quantidadeVendida!: number

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeVendida = 0;
    }
}