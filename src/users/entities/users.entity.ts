import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
export enum UserRole {
    ADMIN = 'Admin',
    CLIENT = 'Client',
    TESTER = 'Tester',
    EMPLOYEE = 'Employee',
}
@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    name: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column("enum", {enum: UserRole, default: UserRole.CLIENT})
    role: UserRole;

    @Column("text", {array: true, nullable: true})
    purchase_history?: string[];

    @Column()
    test_subject_status:boolean;

    @Column("text", {array: true, nullable: true})
    allergic_reactions?: string[];


}