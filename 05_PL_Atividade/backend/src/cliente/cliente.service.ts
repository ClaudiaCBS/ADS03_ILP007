import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor (@InjectRepository(Cliente) 
  private serviceCliente : Repository<Cliente>){
  }

  async create(createClienteDto: CreateClienteDto) {
    return await this.serviceCliente.save(createClienteDto);
  }

  async findAll() {
    return await this.serviceCliente.find();
  }

  async findOne(id: number) {
    return await this.serviceCliente.findOne({where : {id : id}});
  }

  async update(id: number, updateClienteDto: CreateClienteDto) {
    return await this.serviceCliente.update(id, updateClienteDto);
  }

  async remove(id: number) {
    return await this.serviceCliente.delete(id);
  }
}
