import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaServicos from "./listaServicos";
import ListaProdutos from "./listaProdutos";
import Comprar from "./comprar";
import Dashboard from "./dashboard";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        // Botões para as páginas acrescentados & condições para exibir as páginas baseado no state 'tela'.
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Dashboard', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço' , 'Comprar']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto />
                </>
            )
        } else if(this.state.tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico />
                </>
            )
        } else if(this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd"/>
                </>
            )
        } else if(this.state.tela === 'Comprar') {
            return (
                <>
                    {barraNavegacao}
                    <Comprar/>
                </>
            )
        } else if(this.state.tela === 'Dashboard') {
            return (
                <>
                    {barraNavegacao}
                    <Dashboard tema="#e3f2fd"/>
                </>
            )
        } else {
            return (
                <>{barraNavegacao}<p>Página não existe</p></>
            )
        }
    }
}