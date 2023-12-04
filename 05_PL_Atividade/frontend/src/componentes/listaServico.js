import { useEffect, useState } from "react"
import * as servicoService from "../services/servico.service"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServico(props) {
    const [servicos, setServicos] = useState([])
    let tema = props.tema

    function getServicos() {
        servicoService.findAllServico().then(resp => {
            console.log(resp.data)
            setServicos(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }
    
    useEffect(() => {
        getServicos()
    },[])

    return (
        <div className="container-fluid">
            {servicos && (
                servicos.map((servico) => {
                    return (
                        <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>{servico.nome}</p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    )
                })
            )}
                
            </div>
    )
}