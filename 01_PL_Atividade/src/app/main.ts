import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CompraProduto from "../negocio/compraProduto";
import CompraProdutoPet from "../negocio/compraProdutoPet";
import CompraServico from "../negocio/compraServico";
import CompraServicoPet from "../negocio/compraServicoPet";
import ListagemMaisConsumidosPet from "../negocio/listagemMaisConsumidosPet";
import ListagemMaisConsumidosQuantidade from "../negocio/listagemMaisConsumidosQuantidade";
import ListagemMaisConsumidosValor from "../negocio/listagemMaisConsumidosValor";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagemProdutosServicosMaisConsumidos";
import SubMenuClientes from "../negocio/subMenuClientes";
import SubMenuProdutos from "../negocio/subMenuProdutos";
import SubMenuServicos from "../negocio/subMenuServicos";
import TestesValidarLista from "./teste";

console.log(`-----------------------------------------------------------------------------------`)
console.log(`Bem-vindo ao Melhor Sistema de Gerenciamento de Pet Shops e Clínicas Veterinarias`)
console.log(`-----------------------------------------------------------------------------------`)
let empresa = new Empresa()
let testes = new TestesValidarLista(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
testes.gerarUsuariosTeste()
let execucao = true

while (execucao) {
    console.log(`--------------------------------------------------------------------`)
    console.log(`Opções:`);
    console.log(`--------------------------------------------------------------------`)
    console.log(`1 - CRUD cliente`);
    console.log(`2 - CRUD produto`);
    console.log(`3 - CRUD serviço`);
    console.log(`4 - Cliente compra Produto`);
    console.log(`5 - Cliente compra Serviço`);
    console.log(`6 - Pet compra Produto`);
    console.log(`7 - Pet compra Serviço`);
    console.log(`8 - Os 10 clientes que mais consumiram produtos ou serviços - em quantidade`);
    console.log(`9 - Produtos e serviços mais consumidos`);
    console.log(`10 - Os 5 clientes que mais consumiram produtos ou serviços - em valor`);
    console.log(`11 - Listagem dos Produtos ou Serviços mais Consumidos por Tipo e Raça de Pets`);
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
        //compra produto cliente
        case 4:
            let compraProduto = new CompraProduto(empresa.getProdutos, empresa.getClientes);
            compraProduto.comprar();
            break;
        //compra serviço cliente
        case 5:
            let compraServico = new CompraServico(empresa.getServicos, empresa.getClientes);
            compraServico.comprar();
            break;
        //compra produto pet
        case 6:
            let compraProdutoPet = new CompraProdutoPet(empresa.getProdutos, empresa.getClientes);
            compraProdutoPet.comprar();
            break;
        //compra serviço pet
        case 7:
            let compraServicoPet = new CompraServicoPet(empresa.getServicos, empresa.getClientes);
            compraServicoPet.comprar();
            break;
        //10 clientes que mais consumiram produtos ou serviços - em quantidade
        case 8:
            let listagemMaisConsumidosQuantidade = new ListagemMaisConsumidosQuantidade(empresa);
            listagemMaisConsumidosQuantidade.listar();
            break;
        //produtos e serviços mais consumidos
        case 9:
            let listagemProdutosServicosMaisConsumidos = new ListagemProdutosServicosMaisConsumidos(empresa);
            listagemProdutosServicosMaisConsumidos.listar();
            break;
        //5 clientes que mais consumiram produtos ou serviços - em valor
        case 10:
            let listagemMaisConsumidosValor = new ListagemMaisConsumidosValor(empresa);
            listagemMaisConsumidosValor.listar();
            break;
        //produtos ou serviços mais Consumidos por Tipo e Raça de Pets
        case 11:
            let listagemMaisConsumidosPet = new ListagemMaisConsumidosPet(empresa);
            listagemMaisConsumidosPet.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            console.log(`--------------------------------------------------------------------`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}