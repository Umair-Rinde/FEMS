import { Controller } from '@nestjs/common';
import { GenericController, GenericService } from 'src/core/modules';
import { CreateFarmerInfoDto } from './dto/create-farmerinfo.dto';
import { UpdateFarmerInfoDto } from './dto/update-farmerinfo.dto';
import { FarmerInfoService } from './farmerinfo.service';

@Controller('configurations/region')
export class FarmerInfoController extends GenericController({
  createObjDTO: CreateFarmerInfoDto,
  updateObjDTO: UpdateFarmerInfoDto,
}) {
  constructor(private readonly regionService: FarmerInfoService) {
    super(regionService);
  }
}
