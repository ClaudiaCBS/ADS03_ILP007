import { api } from "../api";

export async function findAllProduto(){
    return await api.get('produto')
}

export async function createProduto(dado){
    return await api.post('produto', dado)
}

export async function updateProduto(id, dado){
    return await api.put(`produto/${id}`, dado)
}

export async function deleteProduto(id){
    return await api.delete(`produto/${id}`)
}

