import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Consumo from "../modelo/consumo";
import Produto from "../modelo/produto";
import Compra from "./compra";

//criei essa classe
export default class CompraProdutoPet extends Compra {
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
        console.log(`--------------------------------------------------------------------`)
        console.log(`\nCompra Produto`)
        console.log(`--------------------------------------------------------------------`)
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let cliente = this.clientes.filter(b => b.nome === busca)
        if (!cliente || cliente.length === 0){
            console.log(`Nenhum cliente encontrado!`)
            return
        } 

        let buscaPet = this.entrada.receberTexto(`Digite o nome do pet: `)
        let pet = cliente[0].getPets.filter(b => b.getNome === buscaPet)
        if (!pet || pet.length === 0){
            console.log(`Nenhum pet encontrado!`)
            return
        } 

        let buscaProduto = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = this.produtos.filter(b => b.nome === buscaProduto)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 

        let indexProduto = this.produtos.indexOf(produto[0])

        let quantidade = this.entrada.receberNumero(`Digite a quantidade do produto: `)
        let consumo = new Consumo(produto[0].nome, quantidade*produto[0].preco, quantidade)
        pet[0].getProdutosConsumidos.push(consumo)

        //editar o produto na quantidade
        produto[0].quantidadeVendida += quantidade

        //atualizar o produto na lista (primeiro remove e depois adiciona)
        this.produtos.splice(indexProduto, 1)
        this.produtos.push(produto[0])
        

    }
}