import { IsUUID, IsOptional, IsString, IsInt, Min, Max, IsBoolean } from 'class-validator';

export class CreateProductTestDto {
    @IsUUID()
    userId: string;
    productId: string;

    @IsOptional()
    @IsString()
    reaction?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(10)
    rating?: number;

    @IsBoolean()
    survival_status: boolean;
}
