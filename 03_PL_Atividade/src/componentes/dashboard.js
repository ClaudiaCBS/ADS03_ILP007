
// Página para a exibir as listagens de negócio
export default function Dashboard(props){
    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className='row m-3'>
                <h5>. 10 clientes que mais consumiram em quantidade</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Nome cliente</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Cliente 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Cliente 2</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Cliente 3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Cliente 4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Cliente 5</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
                <h5>. Listagem geral de produtos e serviços mais consumidos</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Nome</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Produto 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Serviço 4</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Produto 3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Produto 4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Serviço 1</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
                <h5>. Listagem dos serviços e produtos mais consumidos por tipo de pet</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Tipo Pet</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Nome</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Cachorro</td>
                            <td>Produto 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Cachorro</td>
                            <td>Serviço 4</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Cachorro</td>
                            <td>Produto 3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Gato</td>
                            <td>Produto 4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Gato</td>
                            <td>Serviço 1</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
                <h5>. Listagem dos serviços e produtos mais consumidos por raça de pet</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Raça Pet</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Nome</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Golden</td>
                            <td>Produto 1</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Buldogue</td>
                            <td>Serviço 4</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Poodle</td>
                            <td>Produto 3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>SRD</td>
                            <td>Produto 4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Siamês</td>
                            <td>Serviço 1</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row m-3 mt-5'>
                <h5>. 5 clientes que mais consumiram em valor</h5>
                <table style={{ width: 500, border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                    <thead style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <th>Nome cliente</th>
                            <th style={{borderColor: 'black', borderLeft: 1, borderStyle: 'solid'}}>Valor</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: 1, borderColor: 'black', borderStyle: 'solid' }}>
                        <tr>
                            <td>Cliente 1</td>
                            <td>R$ 20</td>
                        </tr>
                        <tr>
                            <td>Cliente 2</td>
                            <td>R$ 10</td>
                        </tr>
                        <tr>
                            <td>Cliente 3</td>
                            <td>R$ 5</td>
                        </tr>
                        <tr>
                            <td>Cliente 4</td>
                            <td>R$ 4</td>
                        </tr>
                        <tr>
                            <td>Cliente 5</td>
                            <td>R$ 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}