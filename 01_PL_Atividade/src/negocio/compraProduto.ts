import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Consumo from "../modelo/consumo";
import Produto from "../modelo/produto";
import Compra from "./compra";

//criei essa classe
export default class CompraProduto extends Compra {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public comprar(): void {
        console.log(`\nCompra Produto`)
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let cliente = this.clientes.filter(b => b.nome === busca)
        if (!cliente || cliente.length === 0){
            console.log(`Nenhum cliente encontrado!`)
            return
        } 
        let buscaProduto = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = this.produtos.filter(b => b.nome === buscaProduto)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 

        let quantidade = this.entrada.receberNumero(`Digite a quantidade do produto: `)
        let consumo = new Consumo(produto[0].nome, quantidade*produto[0].preco, quantidade)
        cliente[0].getProdutosConsumidos.push(consumo)
    }
}