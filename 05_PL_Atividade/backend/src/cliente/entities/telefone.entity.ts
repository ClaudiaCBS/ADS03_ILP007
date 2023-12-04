import { Column, Entity, ManyToOne} from "typeorm"
import { Cliente } from "./cliente.entity"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"

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