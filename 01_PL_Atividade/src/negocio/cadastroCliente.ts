import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`\nInício do cadastro do cliente`);
        console.log(`--------------------------------------------------------------------`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        //incluindo RG
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rg = new RG(valorRg, dataEmissaoRg);
        cliente.getRgs.push(rg)
        //incluindo telefone
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `);
        let numeroTelefone = this.entrada.receberTexto(`Por favor informe o numero de telefone: `);
        let telefone = new Telefone(ddd, numeroTelefone)
        cliente.getTelefones.push(telefone)
        //incluindo pet do cliente
        console.log(`--------------------------------------------------------------------`)
        
        let incluirPet = this.entrada.receberTexto(`Deseja incluir pet: S/N `);
        
        console.log(`--------------------------------------------------------------------`)
        if (incluirPet === 'S' || 's'){
            let criacaoPet = true;
            while (criacaoPet){
                console.log(`--------------------------------------------------------------------`)
                console.log(`Digite 1 para adicionar um pet`);
                console.log(`Digite 0 para concluir`);
                let opcao = this.entrada.receberNumero(`Por favor informe a opção: `);
                console.log(`--------------------------------------------------------------------`)
                if (opcao === 1){
                    let nomePet = this.entrada.receberTexto(`Informe o nome do pet: `);
                    let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
                    let racaPet = this.entrada.receberTexto(`Informe a raça do pet: `);
                    let generoPet = this.entrada.receberTexto(`Informe o genero do pet: `);
                    let pet = new Pet(nomePet, racaPet, generoPet, tipoPet);
                    cliente.getPets.push(pet);
                } else if (opcao === 0){
                    criacaoPet = false;
                }
            }
        }


        this.clientes.push(cliente)
        console.log(`\nCadastro Concluído :)\n`);
    }
}