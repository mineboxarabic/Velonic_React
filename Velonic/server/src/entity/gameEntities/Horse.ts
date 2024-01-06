import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('mtrd_horses')
export class Horse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cid: number;

    @Column({ length: 50 })
    stable: string;

    @Column({ length: 100 })
    model: string;

    @Column({ type: 'tinyint' })
    isFemale: boolean;

    @Column({ length: 50 })
    name: string;

    @Column({ type: 'tinyint' })
    speed: number;

    @Column({ type: 'tinyint' })
    acceleration: number;

    @Column({ type: 'tinyint' })
    handling: number;

    @Column({ type: 'tinyint', default: 0 })
    favourite: boolean;

    @Column({ type: 'tinyint', default: 0 })
    isDead: boolean;

    @Column({ type: 'tinyint', default: 0 })
    isOut: boolean;
}
