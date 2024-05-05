import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CreateFarmerInfoDto } from './dto/create-farmerinfo.dto';
import { UpdateFarmerInfoDto } from './dto/update-farmerinfo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FarmerInfo } from './farmerinfo.model';

@Injectable()
export class FarmerInfoService extends GenericService<
  FarmerInfo,
  CreateFarmerInfoDto,
  UpdateFarmerInfoDto
>({}) {
  constructor(
    @InjectModel(FarmerInfo) private farmerinfo: typeof FarmerInfo,
    private reqParams:RequestParamsService
  ) {
    super(farmerinfo,reqParams);
  }
}
