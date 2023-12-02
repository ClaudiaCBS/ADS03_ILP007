import Servico from "../modelo/servico";
import Listagem from "./listagem";

//criei essa classe
export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`-----------------------------------`)
        console.log(`\nLista de todos os serviços:`);
        console.log(`-----------------------------------`)
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco);
            console.log(`Quantidade vendida: ` + servico.quantidadeVendida);
            console.log(`--------------------------------------------------------------------`)
        });
        console.log(`\n`);
    }
}