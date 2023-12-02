import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Update from "./update";


//criei essa classe
export default class UpdateServico extends Update {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`-----------------------------------`)
        console.log(`\nEdição do serviço`)
        console.log(`-----------------------------------`)
        let busca = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = this.servicos.filter(b => b.nome === busca)
        if (!servico || servico.length === 0){
            console.log(`Nenhum serviço encontrado!`)
            return
        } 

        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        //removi o serviço da lista
        let index = this.servicos.indexOf(servico[0])
        this.servicos.splice(index, 1)
        //adicionar o serviço na lista
        let serv = new Servico(nome, preco)
        this.servicos.push(serv)

    }
}