import { Column, Entity, OneToMany} from "typeorm";
import { Telefone } from "./telefone.entity";
import { Rg } from "./rg.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { Pet } from "./pet.entity";


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    nomeSocial: string

    @Column()
    cpf: string

    @OneToMany(() => Rg, rg => rg.cliente,{cascade:true})
    rgs: Rg[]

    @OneToMany(() => Telefone, telefone => telefone.cliente,{cascade:true})
    telefones: Telefone[]

    @OneToMany(() => Pet, pet => pet.cliente,{cascade:true})
    pets : Pet[]

    @Column()
    dataCadastro: Date
}
