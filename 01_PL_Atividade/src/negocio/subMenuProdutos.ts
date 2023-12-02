import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "./cadastroProduto";
import DeleteProduto from "./deleteProduto";
import ListagemProdutos from "./listagemProdutos";
import SubMenu from "./subMenu";
import UpdateProduto from "./updateProduto";

//criei essa classe
export default class SubMenuProdutos extends SubMenu {
    private empresa!: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }
    public opcoes(): void {
        let execucao = true
        while (execucao){
            console.log(`-----------------------------------`)
            console.log(`Opções CRUD do Produto`);
            console.log(`-----------------------------------`)
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Editar dados do produto`);
            console.log(`4 - Deletar dados do produto`);
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(`--------------------------------------------------------------------`)

            switch (opcao) {
                //cadastro do produto
                case 1:
                    let cadastroProduto = new CadastroProduto(this.empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                //listar produtos
                case 2:
                    let listagemProduto = new ListagemProdutos(this.empresa.getProdutos)
                    listagemProduto.listar()
                    break;
                //abrir update do produto
                case 3:
                    let updateProduto = new UpdateProduto(this.empresa.getProdutos)
                    updateProduto.update()
                    break;
                //deletar produto
                case 4:
                    let deleteProduto = new DeleteProduto(this.empresa.getProdutos);
                    deleteProduto.delete();
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