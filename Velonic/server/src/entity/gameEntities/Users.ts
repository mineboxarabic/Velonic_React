import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')  
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, default: null, nullable: true })
    hex_id: string;

    @Column({ length: 50, default: null, nullable: true })
    steam_id: string;

    @Column({ length: 100, default: null, nullable: true })
    community_id: string;

    @Column({ length: 255, default: null, nullable: true })
    license: string;

    @Column({ length: 255, default: 'Unknown' })
    name: string;

    @Column({ length: 50, default: 'Unknown' })
    ip: string;

    @Column({ length: 50, default: 'user' })
    rank: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ type: 'text', default: '{}' })
    controls: string;

    @Column({ type: 'text', default: '{}' })
    settings: string;

    @Column({ type: 'text', default: '{}' })
    inventory_settings: string;

    @Column({ default: 300 })
    afk_timer: number;

    @Column({ default: 3 })
    characters_slots: number;
}
