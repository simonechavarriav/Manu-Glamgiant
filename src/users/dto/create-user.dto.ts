import { IsString, IsEmail, IsUUID, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsArray()
    @IsOptional()
    allergicReactions?: string[];
}
