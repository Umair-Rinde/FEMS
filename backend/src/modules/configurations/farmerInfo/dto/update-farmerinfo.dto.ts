import { PartialType } from "@nestjs/mapped-types";
import { CreateFarmerInfoDto } from "./create-farmerinfo.dto";

export class UpdateFarmerInfoDto extends PartialType(CreateFarmerInfoDto){}