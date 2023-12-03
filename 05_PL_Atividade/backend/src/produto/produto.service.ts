import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor (@InjectRepository(Produto) 
  private serviceProduto : Repository<Produto>){
  }
  async create(createProdutoDto: CreateProdutoDto) {
    return await this.serviceProduto.save(createProdutoDto);
  }

  async findAll() {
    return await this.serviceProduto.find();
  }

  async findOne(id: number) {
    return await this.serviceProduto.findOne({where : {id : id}});
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return await this.serviceProduto.update(id, updateProdutoDto);
  }

  async remove(id: number) {
    return await this.serviceProduto.delete(id);
  }
}
