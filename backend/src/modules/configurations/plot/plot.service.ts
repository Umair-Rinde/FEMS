import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Plots} from './plot.model';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';

@Injectable()
export class PlotService extends GenericService<
  Plots,
  CreatePlotDto,
  UpdatePlotDto
>({}) {
  constructor(
    @InjectModel(Plots) private plot: typeof Plots,
    private reqParams:RequestParamsService
  ) {
    super(plot,reqParams);
  }
}
