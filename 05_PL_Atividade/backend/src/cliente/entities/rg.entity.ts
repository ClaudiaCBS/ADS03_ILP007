import { Column, Entity, ManyToOne } from "typeorm"
import { Cliente } from "./cliente.entity"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"


@Entity()
export class Rg {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rg: string

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'} )
    dataEmissao: Date

    @ManyToOne(() => Cliente, cliente => cliente.rgs)
    cliente: Cliente
}