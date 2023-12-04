import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nome : string

    @Column()
    raca : string

    @Column()
    genero : string

    @Column()
    tipo : string

    @ManyToOne(() => Cliente, cliente => cliente.pets)
    cliente : Cliente
}
