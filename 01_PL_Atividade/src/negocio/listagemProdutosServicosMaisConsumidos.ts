import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

//criei essa classe
export default class ListagemProdutosServicosMaisConsumidos extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public listar(): void {
        let posicao = 1
        let produtos = this.empresa.getProdutos
        produtos.sort(function compare(a, b): number {
            if (b.quantidadeVendida > a.quantidadeVendida){
                return -1
            }
            if (a.quantidadeVendida > b.quantidadeVendida){
                return 1
            }
            return 0  

        console.log(`--------------------------------------------------------------------`)

        }).reverse().forEach(item => {
            console.log(`${posicao}º Produto: ${item.nome}   |   Quantidade: ${item.quantidadeVendida}`)
            posicao++;
        })

        posicao = 1

        console.log(`----------------------------------------------------`)

        let servicos = this.empresa.getServicos
        servicos.sort(function compare(a, b): number {
            if (b.quantidadeVendida > a.quantidadeVendida){
                return -1
            }
            if (a.quantidadeVendida > b.quantidadeVendida){
                return 1
            }
            return 0  
        }).reverse().forEach(item => {
            console.log(`${posicao}º Serviço: ${item.nome}   |   Quantidade: ${item.quantidadeVendida}`)
            posicao++;
        })
    }
}