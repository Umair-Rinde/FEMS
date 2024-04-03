import { PartialType } from "@nestjs/mapped-types";
import { CreateCropDto } from "./create-crop.dto";

class UpdateCrops extends PartialType(CreateCropDto){}