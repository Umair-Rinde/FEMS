import { PartialType } from "@nestjs/mapped-types";
import { CreateCropDto } from "./create-crop.dto";

export class UpdateCrops extends PartialType(CreateCropDto){}