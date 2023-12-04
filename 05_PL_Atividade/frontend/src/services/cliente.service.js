import { api } from "../api";

export async function findAllClientes(){
    return await api.get('cliente')
}

export async function createCliente(dado){
    return await api.post('cliente', dado)
}

export async function updateCliente(id, dado){
    return await api.put(`cliente/${id}`, dado)
}

export async function deleteCliente(id){
    return await api.delete(`cliente/${id}`)
}

