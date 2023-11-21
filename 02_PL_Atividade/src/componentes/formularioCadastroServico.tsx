import { Component } from "react";

// Página para o formulário de cadastro de serviço
export default class FormularioCadastroServico extends Component<{}>{
    render() {
        return (
            <div className="container-fluid">
            <form>
                <h3>Informações do serviço:</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}