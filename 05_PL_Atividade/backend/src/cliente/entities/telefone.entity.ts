import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./cliente.entity"

@Entity()
export class Telefone {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ddd: string

    @Column()
    telefone: string

    @ManyToOne(() => Cliente, cliente => cliente.telefones)
    cliente: Cliente
}