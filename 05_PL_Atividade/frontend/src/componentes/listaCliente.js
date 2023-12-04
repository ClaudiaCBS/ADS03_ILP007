import { useEffect, useState } from "react"
import * as clienteService from "../services/cliente.service"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    const [clientes, setClientes] = useState([])
    let tema = props.tema

    function getClientes() {
        clienteService.findAllClientes().then(resp => {
            console.log(resp.data)
            setClientes(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }

    function deleteClientes(id) {
        clienteService.deleteCliente(id).then(resp => {
            console.log(resp.data)
            getClientes()
        }).catch(erro => {
            console.log(erro)
        })
    }
    
    useEffect(() => {
        getClientes()
    },[])

    return (
        <div className="container-fluid">
            {clientes && (
                clientes.map((cliente) => {
                    return (
                        <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>{cliente.nome}</p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button onClick={() => deleteClientes(cliente.id)}  className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    )
                })
            )}
                
            </div>
    )
}