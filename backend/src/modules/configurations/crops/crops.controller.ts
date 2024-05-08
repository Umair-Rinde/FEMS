import { Controller } from '@nestjs/common';
import { GenericController} from 'src/core/modules';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCrops } from './dto/update-crop.dto';
import { CropsService } from './crops.service';
@Controller('configurations/crops')
export class CropsController extends GenericController({
  createObjDTO: CreateCropDto,
  updateObjDTO: UpdateCrops,
}) {
  constructor(private readonly regionService:CropsService ) {
    super(regionService);
  }
}
