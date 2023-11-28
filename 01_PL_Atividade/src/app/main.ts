import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CompraProduto from "../negocio/compraProduto";
import CompraServico from "../negocio/compraServico";
import ListagemMaisConsumidosQuantidade from "../negocio/listagemMaisConsumidosQuantidade";
import ListagemMaisConsumidosValor from "../negocio/listagemMaisConsumidosValor";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagemProdutosServicosMaisConsumidos";
import SubMenuClientes from "../negocio/subMenuClientes";
import SubMenuProdutos from "../negocio/subMenuProdutos";
import SubMenuServicos from "../negocio/subMenuServicos";
import TestesValidarLista from "./teste";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let testes = new TestesValidarLista(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
testes.gerarUsuariosTeste()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - CRUD cliente`);
    console.log(`2 - CRUD produto`);
    console.log(`3 - CRUD serviço`);
    console.log(`4 - Cliente compra Produto`);
    console.log(`5 - Cliente compra Serviço`);
    console.log(`6 - Os 10 clientes que mais consumiram produtos ou serviços - em quantidade`);
    console.log(`7 - Produtos e serviços mais consumidos`);
    console.log(`8 - Os 5 clientes que mais consumiram produtos ou serviços - em valor`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    console.log(`--------------------------------------------------------------------`)

    switch (opcao) {
        //CRUD do cliente
        case 1:
            let crudCliente = new SubMenuClientes(empresa)
            crudCliente.opcoes()
            break;
        //CRUD do produto
        case 2:
            let crudProduto = new SubMenuProdutos(empresa)
            crudProduto.opcoes()
            break;
        //CRUD do serviço
        case 3:
            let crudServico = new SubMenuServicos(empresa)
            crudServico.opcoes()
            break;
        //compra produto
        case 4:
            let compraProduto = new CompraProduto(empresa.getProdutos, empresa.getClientes);
            compraProduto.comprar();
            break;
        //compra serviço
        case 5:
            let compraServico = new CompraServico(empresa.getServicos, empresa.getClientes);
            compraServico.comprar();
            break;
        //10 clientes que mais consumiram produtos ou serviços - em quantidade
        case 6:
            let listagemMaisConsumidosQuantidade = new ListagemMaisConsumidosQuantidade(empresa);
            listagemMaisConsumidosQuantidade.listar();
            break;
        //produtos e serviços mais consumidos
        case 7:
            let listagemProdutosServicosMaisConsumidos = new ListagemProdutosServicosMaisConsumidos(empresa);
            listagemProdutosServicosMaisConsumidos.listar();
            break;
        //5 clientes que mais consumiram produtos ou serviços - em valor
        case 8:
            let listagemMaisConsumidosValor = new ListagemMaisConsumidosValor(empresa);
            listagemMaisConsumidosValor.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}