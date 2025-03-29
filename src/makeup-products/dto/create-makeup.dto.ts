import { MakeupProductCategory } from '../entities/makeup-products.entity';
import { IsEnum, IsInt, IsString, Min, Max } from 'class-validator';

export class CreateMakeupDto {
    @IsString()
    name: string;

    @IsEnum(MakeupProductCategory)
    category: MakeupProductCategory;

    @IsInt()
    stock: number;

    @IsString()
    warehouse_location: string;

    @IsInt()
    @Min(1)
    @Max(10)
    durabilityScore: number;
}
