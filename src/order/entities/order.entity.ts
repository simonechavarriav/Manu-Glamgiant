import {Entity,PrimaryGeneratedColumn,ManyToOne,ManyToMany,JoinTable,Column,} from 'typeorm';
import { User } from '../../users/entities/users.entity';
import {MakeupProducts} from '../../makeup-products/entities/makeup-products.entity';

export enum PaymentStatus {
    PAID = 'Paid',
    REFUNDED = 'Refunded',
    FAILED = 'Failed',
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.purchase_history, { onDelete: 'CASCADE' })
    client: User;

    @ManyToMany(() => MakeupProducts)
    @JoinTable()
    products: MakeupProducts[];

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount: number;

    @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.FAILED,
    })
    paymentStatus: PaymentStatus;
}
