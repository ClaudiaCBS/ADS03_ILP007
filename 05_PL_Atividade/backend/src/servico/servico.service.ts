import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { Servico } from './entities/servico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor (@InjectRepository(Servico) 
  private serviceServico : Repository<Servico>){
  }
  async create(createServicoDto: CreateServicoDto) {
    return await this.serviceServico.save(createServicoDto);
  }

  async findAll() {
    return await this.serviceServico.find();
  }

  async findOne(id: number) {
    return await this.serviceServico.findOne({where : {id : id}});
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    return await this.serviceServico.update(id, updateServicoDto);
  }

  async remove(id: number) {
    return await this.serviceServico.delete(id);
  }
}
