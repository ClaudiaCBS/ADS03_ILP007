import { api } from "../api";

export async function findAllServico(){
    return await api.get('servico')
}

export async function createServico(dado){
    return await api.post('servico', dado)
}

export async function updateServico(id, dado){
    return await api.put(`servico/${id}`, dado)
}

export async function deleteServico(id){
    return await api.delete(`servico/${id}`)
}