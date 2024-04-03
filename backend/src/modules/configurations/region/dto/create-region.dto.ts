import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
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