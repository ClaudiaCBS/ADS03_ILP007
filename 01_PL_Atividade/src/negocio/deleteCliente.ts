import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import CadastroCliente from "./cadastroCliente";
import Delete from "./delete";
import Update from "./update";


//criei essa classe
export default class DeleteCliente extends Delete {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public delete(): void {
        console.log(`\nDeletar cliente`)
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let cliente = this.clientes.filter(b => b.nome === busca)
        if (!cliente || cliente.length === 0){
            console.log(`Nenhum cliente encontrado!`)
            return
        } 

        let index = this.clientes.indexOf(cliente[0]);
        this.clientes.splice(index,1);
    }
}