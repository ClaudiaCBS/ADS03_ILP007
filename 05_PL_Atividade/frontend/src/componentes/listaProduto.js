import { useEffect, useState } from "react"
import * as produtoService from "../services/produto.service"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props) {
    const [produtos, setProdutos] = useState([])
    let tema = props.tema

    function getProdutos() {
        produtoService.findAllProduto().then(resp => {
            console.log(resp.data)
            setProdutos(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }
    
    useEffect(() => {
        getProdutos()
    },[])

    return (
        <div className="container-fluid">
            {produtos && (
                produtos.map((produto) => {
                    return (
                        <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>{produto.nome}</p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    )
                })
            )}
                
            </div>
    )
}