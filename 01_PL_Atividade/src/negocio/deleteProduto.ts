import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Delete from "./delete";


//criei essa classe
export default class DeleteProduto extends Delete {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public delete(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`\nDeletar produto`)
        console.log(`--------------------------------------------------------------------`)
        let busca = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = this.produtos.filter(b => b.nome === busca)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 

        let index = this.produtos.indexOf(produto[0]);
        this.produtos.splice(index,1);
    }
}