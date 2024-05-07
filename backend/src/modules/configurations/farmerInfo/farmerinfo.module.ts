import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FarmerInfo } from "./farmerinfo.model";
import { FarmerInfoController } from "./farmerinfo.controller";
import { FarmerInfoService } from "./farmerinfo.service";

@Module({
    imports:[SequelizeModule.forFeature([FarmerInfo])],
    providers:[FarmerInfoService],
    controllers:[FarmerInfoController]
})
export class FarmerInfoModule{}