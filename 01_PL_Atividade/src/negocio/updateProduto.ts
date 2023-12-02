import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Update from "./update";


//criei essa classe
export default class UpdateProduto extends Update {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produtos = produto
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`-----------------------------------`)
        console.log(`\nEdição do produto`)
        console.log(`-----------------------------------`)
        let busca = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = this.produtos.filter(b => b.nome === busca)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 

        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `)
        //removi o produto da lista
        let index = this.produtos.indexOf(produto[0])
        this.produtos.splice(index, 1)
        //adicionar o produto na lista
        let prod = new Produto(nome, preco)
        this.produtos.push(prod)

    }
}