import { IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDepenseDto {

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    montant: number;

    @IsDateString()
    @IsNotEmpty()
    date: Date;

    @IsInt()
    @IsNotEmpty()
    userId: number;


}
