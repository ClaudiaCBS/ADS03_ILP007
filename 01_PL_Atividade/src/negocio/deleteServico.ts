import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Delete from "./delete";
import Update from "./update";


//criei essa classe
export default class DeleteServico extends Delete {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public delete(): void {
        console.log(`\nDeletar serviço`)
        let busca = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = this.servicos.filter(b => b.nome === busca)
        if (!servico || servico.length === 0){
            console.log(`Nenhum serviço encontrado!`)
            return
        } 

        let index = this.servicos.indexOf(servico[0]);
        this.servicos.splice(index,1);
    }
}