import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    name;
}