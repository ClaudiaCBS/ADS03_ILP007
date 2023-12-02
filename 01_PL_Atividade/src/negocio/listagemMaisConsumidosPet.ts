import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

type consumoRacaPet = {
    tipoConsumo: string
    quantidade: number
    racaPet: string
    nomeConsumo: string
}

type consumoTipoPet = {
    tipoConsumo: string
    quantidade: number
    tipoPet: string
    nomeConsumo: string
}

//criei essa classe
export default class ListagemMaisConsumidosPet extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public listar(): void {
        let listaConsumidosRaca: consumoRacaPet[] = []
        let listaConsumidosTipo: consumoTipoPet[] = []

       
        this.empresa.getClientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                pet.getProdutosConsumidos.forEach(consumo => {
                    let consumoRaca: consumoRacaPet = {
                        tipoConsumo: 'P',
                        quantidade: consumo.quantidade,
                        racaPet: pet.getRaca,
                        nomeConsumo: consumo.nome
                    }
                    listaConsumidosRaca.push(consumoRaca)

                    let consumoTipo: consumoTipoPet = {
                        tipoConsumo: 'P',
                        quantidade: consumo.quantidade,
                        tipoPet: pet.getTipo,
                        nomeConsumo: consumo.nome
                    }
                    listaConsumidosTipo.push(consumoTipo)
                })

                pet.getServicosConsumidos.forEach(consumo => {
                    let consumoRaca: consumoRacaPet = {
                        tipoConsumo: 'S',
                        quantidade: consumo.quantidade,
                        racaPet: pet.getRaca,
                        nomeConsumo: consumo.nome
                    }
                    listaConsumidosRaca.push(consumoRaca)

                    let consumoTipo: consumoTipoPet = {
                        tipoConsumo: 'S',
                        quantidade: consumo.quantidade,
                        tipoPet: pet.getTipo,
                        nomeConsumo: consumo.nome
                    }
                    listaConsumidosTipo.push(consumoTipo)
                })
            })
        })

        let listaMaisConsumidosRaca: consumoRacaPet[] = []
        let listaMaisConsumidosTipo: consumoTipoPet[] = []

        listaConsumidosRaca.forEach(consumo =>{
            let item = listaMaisConsumidosRaca.find(i => i.racaPet == consumo.racaPet && i.nomeConsumo == consumo.nomeConsumo)

            if (item == undefined){
                listaMaisConsumidosRaca.push(consumo)

            }else{
                item.quantidade += consumo.quantidade
            }
        })

        listaConsumidosTipo.forEach(consumo =>{
            let item = listaMaisConsumidosTipo.find(i => i.tipoPet == consumo.tipoPet && i.nomeConsumo == consumo.nomeConsumo)

            if (item == undefined){
                listaMaisConsumidosTipo.push(consumo)

            }else{
                item.quantidade += consumo.quantidade
            }
        })

        console.log(`-----------------------------------`)
        console.log('Raças de Pets que mais Consumiram: ')
        console.log(`-----------------------------------`)

        listaMaisConsumidosRaca.sort(function compare(a, b){
            if (a.quantidade > b.quantidade){ 
                return 1
            }
            if (b.quantidade > a.quantidade){ 
                return -1
            }
            return 0

        }).reverse().forEach(item => {
            console.log(`Raça: ${item.racaPet}   |   Item: ${item.nomeConsumo}   |   Quantidade: ${item.quantidade}`)
        })

        console.log(`-----------------------------------`)
        console.log('Tipos de Pets que mais Consumiram: ')
        console.log(`-----------------------------------`)

        listaMaisConsumidosTipo.sort(function compare(a, b){
            if (a.quantidade > b.quantidade){ 
                return 1
            }
            if (b.quantidade > a.quantidade){ 
                return -1
            }
            return 0

        }).reverse().forEach(item => {
            console.log(`Tipo: ${item.tipoPet}   |   Item: ${item.nomeConsumo}   |   Quantidade: ${item.quantidade}`)
            
        })


    }
}