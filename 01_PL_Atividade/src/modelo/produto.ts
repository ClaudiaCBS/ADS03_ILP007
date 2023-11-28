export default class Produto {
    
    public nome!: string
    //inseri preco e o construtor
    public preco!: number

    //criando uma propriedade para o produto
    public quantidadeVendida!: number

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeVendida = 0;
    }
}