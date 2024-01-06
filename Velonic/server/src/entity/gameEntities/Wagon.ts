import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('mtrd_wagons')
export class Wagon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cid: number;

    @Column({ length: 50 })
    stable: string;

    @Column({ length: 100 })
    model: string;

    @Column({ length: 100, default: '' })
    name: string;

    @Column({ default: -2 })
    vehicle_tints: number;

    @Column({ length: 50, default: '-1' })
    vehicle_propsets: string;

    @Column({ default: -1 })
    vehicle_liveries: number;

    @Column({ length: 50, default: '-1' })
    vehicle_lantern_propsets: string;

    @Column({ default: -1 })
    vehicle_extras: number;

    @Column({ type: 'tinyint', default: 0 })
    isOut: boolean;
}
