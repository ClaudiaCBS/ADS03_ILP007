
// Página para o formulário de compras
export default function Comprar(){
    return (
        <div className="container-fluid">
        <form>
            <h3>Informações da compra:</h3>
            <div className="input-group mb-3">
                <select className='form-control'>
                    <option selected disabled>Selecione um cliente</option>
                    <option>Cliente 1</option>
                    <option>Cliente 2</option>
                    <option>Cliente 3</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <select className='form-control'>
                    <option selected disabled>Selecione um item (produto/serviço)</option>
                    <option>Produto 1</option>
                    <option>Produto 2</option>
                    <option>Serviço 1</option>
                    <option>Serviço 2</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
 }