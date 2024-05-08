import { IsNotEmpty, IsString } from "class-validator";

export class CreatePlotDto {
    @IsString()
    @IsNotEmpty()
    state:string

    @IsString()
    @IsNotEmpty()
    district:string

    @IsString()
    @IsNotEmpty()
    region:string
    
}