import { Controller } from '@nestjs/common';
import { GenericController, GenericService } from 'src/core/modules';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionService } from './region.service';

@Controller('configurations/region')
export class RegionController extends GenericController({
  createObjDTO: CreateRegionDto,
  updateObjDTO: UpdateRegionDto,
}) {
  constructor(private readonly regionService: RegionService) {
    super(regionService);
  }
}
