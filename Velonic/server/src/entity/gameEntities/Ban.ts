import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('bans')
export class Ban {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500, default: '0' })
    banid: string;

    @Column({ length: 500, default: '0' })
    steam: string;

    @Column({ length: 500, default: '0' })
    name: string;

    @Column({ length: 500, default: '0' })
    license: string;

    @Column({ length: 500, default: '0' })
    license2: string;

    @Column({ length: 500, default: '0' })
    xbox: string;

    @Column({ length: 500, default: '0' })
    live: string;

    @Column({ length: 500, default: '0' })
    discord: string;

    @Column({ length: 500, default: '0' })
    cfx: string;

    @Column({ length: 50, default: '0' })
    ip: string;

    @Column('longtext')
    token: string;

    @Column({ length: 500, default: '0' })
    bannedby: string;

    @Column('int', { default: 0 })
    bannedon: number;

    @Column('longtext', { default: '0' })
    expire: string;

    @Column({ length: 500, default: '0' })
    reason: string;
}
