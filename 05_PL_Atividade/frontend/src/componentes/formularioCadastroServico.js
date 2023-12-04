import { useState } from "react"
import * as servicoService from "../services/servico.service"


// Página para o formulário de cadastro de serviço
export default function FormularioCadastroServico(){
    const [preco, setPreco] = useState()
    const [nome, setNome] = useState()

    function cadastrarServico() {
        let servico = {
            nome: nome,
            preco: preco,
            quantidadeVenda: 0
        }
        servicoService.createServico(servico).then(resp => {
            console.log(resp)
        }).catch(erro => {
            console.log(erro)
        })
    }

    return (
        <div className="container-fluid">
            <form>
                <h3>Informações do serviço:</h3>
                <div className="input-group mb-3">
                    <input onChange={e => setNome(e.target.value)} type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input onChange={e => setPreco(parseFloat(e.target.value))} type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button onClick={() => cadastrarServico()} className="btn btn-outline-secondary" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}