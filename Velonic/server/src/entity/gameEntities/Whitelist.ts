import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('whitelist')
export class Whitelist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    hex: string;

    @Column({ default: 0 })
    priority: number;

    @Column({ length: 50, default: '0' })
    name: string;
}
