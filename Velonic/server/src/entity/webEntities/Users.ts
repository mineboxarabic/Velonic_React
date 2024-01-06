import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('w_users')  
export default class W_Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, default: 'unknown' })
    username: string;

    @Column({ length: 50, default: 'unknown' })
    firstname: string;

    @Column({ length: 50, default: 'unknown' })
    lastname: string;

    @Column({ length: 255, default: 'unknown' })
    email: string;

    @Column({ length: 255, default: 'unknown' })
    password: string;

    @Column({ length: 255, default: 'unknown' })
    img_profile: string;

    @Column({ length: 1500, default: 'unknown' })
    bio: string;

}
