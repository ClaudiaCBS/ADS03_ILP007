import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroServico from "./cadastroServico";
import DeleteServico from "./deleteServico";
import ListagemServicos from "./listagemServico";
import SubMenu from "./subMenu";
import UpdateServico from "./updateServico";

//criei essa classe
export default class SubMenuServicos extends SubMenu {
    private empresa!: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public opcoes(): void {
        let execucao = true
        while (execucao){
            console.log(`-----------------------------------`)
            console.log(`Opções CRUD do Serviço`);
            console.log(`-----------------------------------`)
            console.log(`1 - Cadastrar serviço`);
            console.log(`2 - Listar todos os serviços`);
            console.log(`3 - Editar dados do serviços`);
            console.log(`4 - Deletar dados do serviços`);
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`--------------------------------------------------------------------`)

            switch (opcao) {
                //cadastro do serviço
                case 1:
                    let cadastroServico = new CadastroServico(this.empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                //listar serviço
                case 2:
                    let listagemServico = new ListagemServicos(this.empresa.getServicos)
                    listagemServico.listar()
                    break;
                //abrir update do serviço
                case 3:
                    let updateServico = new UpdateServico(this.empresa.getServicos)
                    updateServico.update()
                    break;
                //deletar serviço
                case 4:
                    let deleteServico = new DeleteServico(this.empresa.getServicos);
                    deleteServico.delete();
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