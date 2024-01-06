import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('inventory')
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    item_id: string;

    @Column({ length: 255, default: '0' })
    name: string;

    @Column('text', { nullable: true })
    information: string;

    @Column()
    slot: number;

    @Column({ default: false })
    dropped: boolean;

    @Column('bigint', { default: 0 })
    creationDate: number;

    @Column({ default: 100 })
    quality: number;
}
