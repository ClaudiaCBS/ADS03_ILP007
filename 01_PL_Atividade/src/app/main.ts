import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import CompraProduto from "../negocio/compraProduto";
import CompraServico from "../negocio/compraServico";
import DeleteCliente from "../negocio/deleteCliente";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemMaisConsumidosQuantidade from "../negocio/listagemMaisConsumidosQuantidade";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServico";
import UpdateCliente from "../negocio/updateCliente";
import UpdateProduto from "../negocio/updateProduto";
import UpdateServico from "../negocio/updateServico";
import TestesValidarLista from "./teste";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let testes = new TestesValidarLista(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
testes.gerarUsuariosTeste()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar dados do cliente`);
    console.log(`4 - Deletar dados do cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar dados do produto`);
    console.log(`8 - Deletar dados do produto`);
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Editar dados do serviço`);
    console.log(`12 - Deletar dados do serviço`);
    console.log(`13 - Cliente compra Produto`);
    console.log(`14 - Cliente compra Serviço`);
    console.log(`15 - Os 10 clientes que mais consumiram produtos ou serviços - em quantidade`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        //abrir update de cliente
        case 3:
            let update = new UpdateCliente(empresa.getClientes)
            update.update()
            break;
        //deletar cliente
        case 4:
            let deleteCliente = new DeleteCliente(empresa.getClientes);
            deleteCliente.delete();
            break;
        //cadastro do produto
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        //listar produtos
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        //abrir update do produto
        case 7:
            let updateProduto = new UpdateProduto(empresa.getProdutos)
            updateProduto.update()
            break;
        //deletar produto
        case 8:
            let deleteProduto = new DeleteProduto(empresa.getProdutos);
            deleteProduto.delete();
            break;    
        //cadastro do serviço
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        //listar serviços
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        //abrir update do serviço
        case 11:
            let updateServico = new UpdateServico(empresa.getServicos)
            updateServico.update()
            break;
        //deletar serviço
        case 12:
            let deleteServico = new DeleteServico(empresa.getServicos);
            deleteServico.delete();
            break;
        //compra produto
        case 13:
            let compraProduto = new CompraProduto(empresa.getProdutos, empresa.getClientes);
            compraProduto.comprar();
            break;
        //compra serviço
        case 14:
            let compraServico = new CompraServico(empresa.getServicos, empresa.getClientes);
            compraServico.comprar();
            break;
        //10 clientes que mais consumiram produtos ou serviços - em quantidade
        case 15:
            let listagemMaisConsumidosQuantidade = new ListagemMaisConsumidosQuantidade(empresa);
            listagemMaisConsumidosQuantidade.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}