import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('characters')
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: true })
    owner: string;

    @Column({ length: 50, default: 'John' })
    first_name: string;

    @Column({ length: 50, default: 'Doe' })
    last_name: string;

    @CreateDateColumn()
    date_created: Date;

    @Column({ length: 50, default: 'NULL' })
    dob: string;

    @Column('int', { default: 500 })
    cash: number;

    @Column('int', { default: 0 })
    bankid: number;

    @Column('text', { default: '{}' })
    licenses: string;

    @Column({ length: 15, nullable: true })
    phone_number: string;

    @Column({ length: 15, default: 'false' })
    is_burner: string;

    @Column({ length: 255, default: 'unemployed' })
    job: string;

    @Column({ length: 255, default: 'none' })
    job2: string;

    @Column('int', { default: 1 })
    new: number;

    @Column('int', { default: 0 })
    deleted: number;

    @Column('int', { default: 0 })
    gender: number;

    @Column('int', { default: 0 })
    jail_time: number;

    @Column({ length: 50, nullable: true })
    is_dead: string;

    @Column('int', { default: 1 })
    deathes: number;

    @Column('int', { default: 0 })
    jail_time_mobster: number;

    @Column('mediumtext', { nullable: true })
    overwrites: string;

    @Column('int', { default: 0 })
    dirty_money: number;

    @Column('int', { default: 0 })
    gang_type: number;

    @Column('int', { default: 0 })
    judge_type: number;

    @Column('int', { default: 0 })
    iswjob: number;

    @Column({ length: 1520, default: '{}' })
    metaData: string;

    @Column('int', { default: 0 })
    stress_level: number;

    @Column('mediumtext', { default: '{}' })
    bones: string;

    @Column({ length: 4160, default: '[]' })
    emotes: string;

    @Column('int', { default: 0 })
    paycheck: number;

    @Column('int', { default: 0 })
    rehab: number;

    @Column('mediumtext', { default: 'move_m@casual@d' })
    meta: string;

    @Column('int', { default: 0 })
    casino_chip_count: number;

    @Column({ length: 255, nullable: true })
    dna: string;

    @Column('longtext', { nullable: true })
    gallery: string;

    @Column({ length: 255, nullable: true })
    profilepic: string;

    @Column('longtext', { nullable: true })
    information: string;

    @Column('longtext', { nullable: true })
    avatar: string;

    @Column('longtext', { nullable: true })
    pp: string;
}



