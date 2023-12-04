import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Telefone } from './entities/telefone.entity';
import { Rg } from './entities/rg.entity';
import { Pet } from './entities/pet.entity';
import { Console } from 'console';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private serviceCliente: Repository<Cliente>,

    @InjectRepository(Telefone)
    private serviceTelefone: Repository<Telefone>,

    @InjectRepository(Rg)
    private serviceRg: Repository<Rg>,
    
    @InjectRepository(Pet)
    private servicePet: Repository<Pet>
  ) {
  }

  async create(createClienteDto: CreateClienteDto) {
    const newCliente: Cliente = new Cliente()
    newCliente.id = 0,
    newCliente.nome = createClienteDto.nome
    newCliente.nomeSocial = createClienteDto.nomeSocial
    newCliente.cpf = createClienteDto.cpf
    newCliente.rgs = []
    newCliente.telefones = []
    newCliente.dataCadastro = new Date()
    await this.serviceCliente.manager.save(newCliente)

    createClienteDto.telefones.forEach(telefone => {
      const newTelefone = new Telefone()
      newTelefone.ddd = telefone.ddd
      newTelefone.telefone = telefone.telefone
      newTelefone.cliente = newCliente
      this.serviceTelefone.manager.save(newTelefone)
    })

    createClienteDto.rgs.forEach(rg => {
      const newRg: Rg = new Rg()
      newRg.id = 0
      newRg.rg = rg.rg
      newRg.dataEmissao = rg.dataEmissao
      newRg.cliente = newCliente
      this.serviceRg.manager.save(newRg)
    })

    createClienteDto.pets.forEach( pet => {
      const newPet = new Pet()
      newPet.cliente = newCliente
      newPet.genero = pet.genero
      newPet.nome = pet.nome
      newPet.tipo = pet.tipo
      newPet.raca = pet.raca
      console.log(newPet)
      this.servicePet.manager.save(newPet)
    })

    return 'cadastro realizado com sucesso'
  }

  async findAll() {
    return await this.serviceCliente.find();
  }

  async findOne(id: number) {
    return await this.serviceCliente.findOne({ where: { id: id } });
  }

  async update(id: number, updateClienteDto: CreateClienteDto) {
    return await this.serviceCliente.update(id, updateClienteDto);
  }

  async remove(id: number) {
    const cliente = await this.serviceCliente.find({where: {id : id}})
    return await this.serviceCliente.remove(cliente)
  }
}