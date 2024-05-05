import { IsNotEmpty, IsString } from "class-validator";

export class CreateFarmerInfoDto {
    @IsString()
    @IsNotEmpty()
    state:string

    @IsString()
    @IsNotEmpty()
    pinCode:string

    @IsString()
    @IsNotEmpty()
    districts:string

    @IsString()
    @IsNotEmpty()
    region:string

    @IsString()
    @IsNotEmpty()
    crops:string

    @IsString()
    @IsNotEmpty()
    aboutYou:string
    
}