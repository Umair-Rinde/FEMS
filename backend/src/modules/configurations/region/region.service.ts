import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './region.model';

@Injectable()
export class RegionService extends GenericService<
  Region,
  CreateRegionDto,
  UpdateRegionDto
>({}) {
  constructor(
    @InjectModel(Region) private region: typeof Region,
    private reqParams:RequestParamsService
  ) {
    super(region,reqParams);
  }
}
