import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "./cadastroCliente";
import DeleteCliente from "./deleteCliente";
import ListagemClientes from "./listagemClientes";
import SubMenu from "./subMenu";
import UpdateCliente from "./updateCliente";

//criei essa classe
export default class SubMenuClientes extends SubMenu {
    private empresa!: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public opcoes(): void {
        let execucao = true
        while (execucao){
            console.log(`-----------------------------------`)
            console.log(`Opções CRUD do Cliente`);
            console.log(`-----------------------------------`)
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Editar dados do clientes`);
            console.log(`4 - Deletar dados do clientes`);
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`--------------------------------------------------------------------`)

            switch (opcao) {
                //cadastro do cliente
                case 1:
                    let cadastroCliente = new CadastroCliente(this.empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                //listar cliente
                case 2:
                    let listagemClientes = new ListagemClientes(this.empresa.getClientes)
                    listagemClientes.listar()
                    break;
                //abrir update do cliente
                case 3:
                    let updateCliente = new UpdateCliente(this.empresa.getClientes)
                    updateCliente.update()
                    break;
                //deletar cliente
                case 4:
                    let deleteCliente = new DeleteCliente(this.empresa.getClientes);
                    deleteCliente.delete();
                    break;    
                case 0:
                    execucao = false
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
        
        
    }
}