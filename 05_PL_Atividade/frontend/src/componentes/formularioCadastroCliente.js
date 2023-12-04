import { useState } from "react"
import * as clienteService from '../services/cliente.service'

export default function FormularioCadastroCliente(props) {
    //Criei os States
    const [rgs, setRgs] = useState([])
    const [numeroRg, setNumeroRg] = useState('')
    const [dataEmissao, setDataEmissao] = useState()

    const [telefones, setTelefones] = useState([])
    const [ddd, setDdd] = useState('')
    const [telefone, setTelefone] = useState('')

    const [pets, setPets] = useState([])
    const [generoPet, setGeneroPet] = useState('')
    const [nomePet, setNomePet] = useState('')
    const [raca, setRaca] = useState('')
    const [tipo, setTipo] = useState('')


    const [nome, setNome] = useState('')
    const [nomeSocial, setNomeSocial] = useState('')
    const [cpf, setCpf] = useState('')

    let tema = props.tema

    // Método executado ao clicar no botão de 'Adicionar RG' para incluir um novo RG ao state 'rgs'
    function adicionarRG(evento) {
        evento.preventDefault()

        setRgs([...rgs, { dataEmissao: dataEmissao, rg: numeroRg }])
    }

    // Método executado ao clicar no botão de 'Adicionar Telefone' para incluir um novo TELEFONE ao state 'telefones'
    function adicionarTelefone(evento) {
        evento.preventDefault()

        setTelefones([...telefones, { ddd: ddd, telefone: telefone }])
    }

    // Método executado ao clicar no botão de 'Adicionar Pet' para incluir um novo PET ao state 'pets'
    function adicionarPet(evento) {
        evento.preventDefault()

        setPets([...pets, { genero: generoPet, nome: nomePet, raca: raca, tipo: tipo }])
    }

    // Método executado ao digitar algo no input de nome de um pet para trocar seu nome no state
    function mudarNomePet(novoNome, indexPet) {
        const petArray = [...pets]
        petArray[indexPet].nome = novoNome;

        setPets(petArray)
    }

    function criarCliente() {
        const cliente = {
            nome: nome,
            nomeSocial: nomeSocial,
            cpf: cpf,
            rgs: rgs,
            telefones: telefones,
            pets : pets
        }
        console.log(cliente)
        clienteService.createCliente(cliente).then(resp => {
            console.log(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }

    return (
        <div className="container-fluid">
            <form>
                <h3>Informações do cliente:</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={e => setNome(e.target.value)} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={e => setNomeSocial(e.target.value)} placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                {/* Incluindo componentes de input para os campos cpf, telefone e RG. */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={e => setCpf(e.target.value)} placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    {/* <input type="date" className="form-control" placeholder="Data emissão CPF" aria-label="Data emissão CPF" aria-describedby="basic-addon1" /> */}
                </div>
                <div className="input-group mb-3">
                    {/* Estrutura para exibir inputs para cada item do state de lista de RGs */}
                    {rgs.map(rg => (
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={e => setNumeroRg(e.target.value)} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                            <input type="date" className="form-control" onSelect={e => setDataEmissao(e.target.value)} placeholder="Data emissão RG" aria-label="Data emissão RG" aria-describedby="basic-addon1" />
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={e => setNumeroRg(e.target.value)} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                        <input type="date" className="form-control" onSelect={e => setDataEmissao(e.target.value)} placeholder="Data emissão RG" aria-label="Data emissão RG" aria-describedby="basic-addon1" />
                    </div>
                    {/* Propriedade 'onClick' para chamar uma função/método que será executado ao clicar neste componente  */}
                    <button className='btn btn-sm btn-light' onClick={(e) => adicionarRG(e)}>+ Adicionar RG</button>
                </div>
                <div className="input-group mb-3">
                    {/* Estrutura para exibir inputs para cada item do state de lista de Telefones */}
                    {telefones.map(telefone => (
                        <div className="input-group mb-3">
                            <input value={telefone.ddd} type="text" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                            <input value={telefone.telefone} type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={e => setDdd(e.target.value)} placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                        <input type="text" className="form-control" onChange={e => setTelefone(e.target.value)} placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                    </div>
                    {/* Propriedade 'onClick' para chamar uma função/método que será executado ao clicar neste componente  */}
                    <button className='btn btn-sm btn-light' onClick={(e) => adicionarTelefone(e)}>+ Adicionar Telefone</button>
                </div>
                <h4>Pets:</h4>
                <div className='m-5'>
                    {pets.map((pet, index) => (
                        <>
                            <h5>{pet.nome.length === 0 ? 'Pet' : pet.nome}</h5>
                            <div className="input-group mb-3 row">
                                <input type="text" value={pet.nome} onChange={(e) => mudarNomePet(e.target.value, index)} className="form-control m-2 col" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control m-2 col" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control m-2 col" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control m-2 col" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                            </div>
                        </>
                    ))}
                    <div className="input-group mb-3 row">
                        <input type="text" className="form-control m-2 col" onChange={e => setNomePet(e.target.value)} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        <input type="text" className="form-control m-2 col" onChange={e => setRaca(e.target.value)} placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                        <input type="text" className="form-control m-2 col" onChange={e => setTipo(e.target.value)} placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                        <input type="text" className="form-control m-2 col" onChange={e => setGeneroPet(e.target.value)} placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                    </div>
                    <button className='btn btn-sm btn-light' onClick={(e) => adicionarPet(e)}>+ Adicionar Pet</button>
                </div>
                <div className="input-group mb-3">
                    <button onClick={() => criarCliente()} className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}