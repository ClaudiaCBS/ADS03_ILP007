import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Telefone } from "./telefone.entity";
import { Rg } from "./rg.entity";

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

    @OneToMany(() => Rg, rg => rg.cliente)
    rgs: Rg[]

    @OneToMany(() => Telefone, telefone => telefone.cliente)
    telefones: Telefone[]

    @Column()
    dataCadastro: Date
}
