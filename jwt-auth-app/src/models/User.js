import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from './Role';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    username;

    @Column()
    password;

    @ManyToOne(() => Role, role => role.users)
    role;
}