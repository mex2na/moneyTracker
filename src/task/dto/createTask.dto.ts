import { IsBoolean, IsNotEmpty, IsString } from "@nestjs/class-validator";

export class createTaskDto {

    @IsString()
    @IsNotEmpty({ message: "Metter le nom du tâche à accomplir" })
    task: string;

    @IsBoolean()
    done: boolean;


}