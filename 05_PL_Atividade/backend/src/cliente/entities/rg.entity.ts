import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./cliente.entity"

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