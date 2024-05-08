import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { FarmerInfoModule } from './farmerInfo/farmerinfo.module';
import { CropsModule } from './crops/crops.module';
import { PlotModule } from './plot/plot.module';

@Module({
  imports: [
    MetaDataModule,
    FarmerInfoModule,
    PlotModule,
    CropsModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
