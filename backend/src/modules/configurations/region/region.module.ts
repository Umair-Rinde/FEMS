import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Region } from "./region.model";
import { RegionController } from "./region.contoller";
import { RegionService } from "./region.service";

@Module({
    imports:[SequelizeModule.forFeature([Region])],
    providers:[RegionService],
    controllers:[RegionController]
})
export class RegionModule{}