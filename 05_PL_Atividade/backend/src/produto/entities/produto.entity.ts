import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"


@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column( {type: 'float'} )
    preco: number

    @Column()
    quantidadeVenda: number
}