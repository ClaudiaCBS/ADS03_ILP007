import { Component } from "react";

type props = {
    tema: string
}

// Incluindo tipagem para RG, TELEFONE e o STATE do componente

type rg = {
    numero: string
    dataEmissao: Date
}

type telefone = {
    numero: string
    ddd: string
}

type pet = {
    nome: string
    raça: string
    genero: string
    tipo: string
}

type state = {
    rgs: rg[],
    telefones: telefone[]
    pets: pet[]
}

export default class FormularioCadastroCliente extends Component<props, state> {

    // Construtor do componente (forma de Classe!!!), incluir valores iniciais dos states
    constructor(prop: any | Readonly<{}>) {
        super(prop)
        // Incluir valores iniciais para o STATE
        this.state = {
            rgs: [{ dataEmissao: new Date(), numero: '' }],
            telefones: [{ddd: '', numero: ''}],
            pets: [{ genero: '', nome: '', raça: '', tipo: ''}]
        }
        
        // Registrar função que edita um STATE
        this.adicionarRG = this.adicionarRG.bind(this)
        this.adicionarTelefone = this.adicionarTelefone.bind(this)
        this.adicionarPet = this.adicionarPet.bind(this)
        this.mudarNomePet = this.mudarNomePet.bind(this)
    }

    // Método executado ao clicar no botão de 'Adicionar RG' para incluir um novo RG ao state 'rgs'
    adicionarRG(evento: Event) {
        evento.preventDefault()
        this.setState({
            // Estrutura para, ao criar uma nova array, manter os itens anteriores da array e adicionar novo(s)
            rgs: [...this.state.rgs, { dataEmissao: new Date(), numero: '' }]
        })
    }

    // Método executado ao clicar no botão de 'Adicionar Telefone' para incluir um novo TELEFONE ao state 'telefones'
    adicionarTelefone(evento: Event) {
        evento.preventDefault()
        this.setState({
            // Estrutura para, ao criar uma nova array, manter os itens anteriores da array e adicionar novo(s)
            telefones: [...this.state.telefones, {ddd: '', numero: ''}]
        })
    }

    // Método executado ao clicar no botão de 'Adicionar Pet' para incluir um novo PET ao state 'pets'
    adicionarPet(evento: Event) {
        evento.preventDefault()
        this.setState({
            pets: [...this.state.pets, { genero: '', nome: '', raça: '', tipo: ''}]
        })
    }

    // Método executado ao digitar algo no input de nome de um pet para trocar seu nome no state
    mudarNomePet(novoNome: string, indexPet: number) {
        const petArray = this.state.pets
        petArray[indexPet].nome = novoNome;

        this.setState({
            pets: petArray
        })
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <h3>Informações do cliente:</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    {/* Incluindo componentes de input para os campos cpf, telefone e RG. */}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                        <input type="date" className="form-control" placeholder="Data emissão CPF" aria-label="Data emissão CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        {/* Estrutura para exibir inputs para cada item do state de lista de RGs */}
                        {this.state.rgs.map(rg => (
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                <input type="date" className="form-control" placeholder="Data emissão RG" aria-label="Data emissão RG" aria-describedby="basic-addon1" />
                            </div>
                        ))}
                        {/* Propriedade 'onClick' para chamar uma função/método que será executado ao clicar neste componente  */}
                        <button className='btn btn-sm btn-light' onClick={(e: any)=> this.adicionarRG(e)}>+ Adicionar RG</button>
                    </div>
                    <div className="input-group mb-3">
                        {/* Estrutura para exibir inputs para cada item do state de lista de Telefones */}
                        {this.state.telefones.map(telefone => (
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                            </div>
                        ))}
                        {/* Propriedade 'onClick' para chamar uma função/método que será executado ao clicar neste componente  */}
                        <button className='btn btn-sm btn-light' onClick={(e: any)=> this.adicionarTelefone(e)}>+ Adicionar Telefone</button>
                    </div>
                    <h4>Pets:</h4>
                    <div className='m-5'>
                        {this.state.pets.map((pet, index) => (
                            <>
                                <h5>{pet.nome.length === 0 ? 'Pet' : pet.nome}</h5>
                                <div className="input-group mb-3 row">
                                    <input type="text" value={pet.nome} onChange={(e)=> this.mudarNomePet(e.target.value, index)} className="form-control m-2 col" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    <input type="text" className="form-control m-2 col" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                    <input type="text" className="form-control m-2 col" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                    <input type="text" className="form-control m-2 col" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                                </div>
                            </>
                        ))}
                        <button className='btn btn-sm btn-light' onClick={(e: any)=> this.adicionarPet(e)}>+ Adicionar Pet</button>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}