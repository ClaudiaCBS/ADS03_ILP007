import { useState } from "react"
import * as produtoService from "../services/produto.service"


// Página para o formulário de cadastro de produto
export default function FormularioCadastroProduto(){
    const [preco, setPreco] = useState()
    const [nome, setNome] = useState()

    function cadastrarProduto(){
        let produto = {
            nome : nome,
            preco : preco,
            quantidadeVenda : 0
        }
        produtoService.createProduto(produto).then( resp => {
            console.log(resp)
        }).catch(erro => {
            console.log(erro)
        })
        
    }
    return (
        <div className="container-fluid">
        <form>
            <h3>Informações do produto:</h3>
            <div className="input-group mb-3">
                <input onChange={e => setNome(e.target.value)} type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input onChange={e => setPreco(parseFloat(e.target.value))} type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                    <button onClick={() => cadastrarProduto()} className="btn btn-outline-secondary" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}