import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Consumo from "../modelo/consumo";
import Servico from "../modelo/servico";
import Compra from "./compra";

//criei essa classe
export default class CompraServicoPet extends Compra {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public comprar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`\nCompra Serviço`)
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

        let buscaServico = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = this.servicos.filter(b => b.nome === buscaServico)
        if (!servico || servico.length === 0){
            console.log(`Nenhum serviço encontrado!`)
            return
        } 

        let indexServico = this.servicos.indexOf(servico[0])

        let quantidade = this.entrada.receberNumero(`Digite a quantidade de serviços: `)
        let consumo = new Consumo(servico[0].nome, quantidade*servico[0].preco, quantidade)
        pet[0].getServicosConsumidos.push(consumo)

        //editar o servico na quantidade
        servico[0].quantidadeVendida += quantidade

        //atualizar o servico na lista (primeiro remove e depois adiciona)
        this.servicos.splice(indexServico, 1)
        this.servicos.push(servico[0])

    }
}