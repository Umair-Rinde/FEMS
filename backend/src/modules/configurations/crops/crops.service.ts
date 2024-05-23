import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Crops } from './crops.model';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCrops } from './dto/update-crop.dto';

@Injectable()
export class CropsService extends GenericService<
  Crops,
  CreateCropDto,
  UpdateCrops
>({}) {
  constructor(
    @InjectModel(Crops) private crop: typeof Crops,
    private reqParams:RequestParamsService
  ) {
    super(crop,reqParams);
  }
}
