import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Plots} from "./plot.model";
import { PlotController} from "./plot.contoller";
import { PlotService } from "./plot.service";

@Module({
    imports:[SequelizeModule.forFeature([Plots])],
    providers:[PlotService],
    controllers:[PlotController]
})
export class PlotModule{}