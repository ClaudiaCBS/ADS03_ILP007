import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

//criei essa classe
export default class ListagemMaisConsumidosQuantidade extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public listar(): void {
        let posicao = 1
        let clientes = this.empresa.getClientes

        clientes.sort(function compare(a, b): number{
            let quantidadeA = 0
            a.getProdutosConsumidos.forEach(item => quantidadeA += item.quantidade)
            a.getServicosConsumidos.forEach(item => quantidadeA += item.quantidade)
            let quantidadeB = 0
            b.getProdutosConsumidos.forEach(item => quantidadeB += item.quantidade)
            b.getServicosConsumidos.forEach(item => quantidadeB += item.quantidade)

            if(quantidadeB > quantidadeA){
                return -1
            }
            if(quantidadeA > quantidadeB){
                return 1
            }
            return 0
        
        console.log(`--------------------------------------------------------------------`)
        
        }).reverse().forEach(item => {
            if(posicao <= 10){
                let quantidadeConsumida = 0
                item.getProdutosConsumidos.forEach(i => quantidadeConsumida += i.quantidade)
                item.getServicosConsumidos.forEach(i => quantidadeConsumida += i.quantidade)
                console.log(`${posicao}º Cliente: ${item.nome}   |   Quantidade: ${quantidadeConsumida}`)
            }
            posicao++;
        })
    }
}