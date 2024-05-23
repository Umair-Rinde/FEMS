import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Crops } from "./crops.model";
import { CropsService } from "./crops.service";
import { CropsController } from "./crops.controller";

@Module({
    imports:[SequelizeModule.forFeature([Crops])],
    providers:[CropsService],
    controllers:[CropsController]
})
export class CropsModule{}