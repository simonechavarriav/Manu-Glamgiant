import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm';
import { MakeupProducts } from 'src/makeup-products/entities/makeup-products.entity';
import { User } from 'src/users/entities/users.entity';

@Entity("product-tests")
export class ProductTests {
    @PrimaryGeneratedColumn ("uuid")
    id: string;
    
    @ManyToOne(() => MakeupProducts, (product) => product.id,{onDelete: "CASCADE"})
    product: MakeupProducts;
    
    @ManyToOne(() => User, (user) => user.id,{onDelete: "CASCADE"})
    user: User;

    @Column("text", { nullable: true })
    reaction: string;

    @Column({ type: "int", nullable: true })
    rating: number;

    @Column({ type: "boolean", default: true })
    survival_status: boolean;

}