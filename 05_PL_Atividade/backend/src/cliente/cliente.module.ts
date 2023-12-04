import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefone } from './entities/telefone.entity';
import { Rg } from './entities/rg.entity';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Telefone, Rg, Pet])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
