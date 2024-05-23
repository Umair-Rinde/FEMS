import { Controller } from '@nestjs/common';
import { GenericController} from 'src/core/modules';
import { PlotService } from './plot.service';
import { UpdatePlotDto } from './dto/update-plot.dto';
import { CreatePlotDto } from './dto/create-plot.dto';

@Controller('configurations/plot')
export class PlotController extends GenericController({
  createObjDTO: CreatePlotDto,
  updateObjDTO: UpdatePlotDto,
}) {
  constructor(private readonly plotService: PlotService) {
    super(plotService);
  }
}
