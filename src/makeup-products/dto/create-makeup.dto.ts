import { IsInt, Min, Max} from "class-validator";

export class CreateMakeupDto {

    @IsInt()
    @Min(1)
    @Max(10)
    durabilityScore: number;
}
