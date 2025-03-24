import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
export enum MakeupProductCategory {
    EYESHADOW = 'Eyeshadow',
    LIPSTICK = 'Lipstick',
    FOUNDATION = 'Foundation',
    BLUSH = 'Blush',
}

@Entity("makeup_products")
export class MakeupProducts {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    name: string;

    @Column({type: "enum", enum: MakeupProductCategory, nullable: false})
    category: MakeupProductCategory;

    @Column({nullable: false})
    stock: number;

    @Column({nullable: false})
    warehouse_location: string;

    @Column({nullable: false})
    durability_score: number;
}
