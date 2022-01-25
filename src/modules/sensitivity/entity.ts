import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export class Sensitivity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    value: number

    @Column()
    playerName: string
}
