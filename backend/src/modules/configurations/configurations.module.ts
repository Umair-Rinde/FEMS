import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';
import { FarmerInfoModule } from './farmerInfo/farmerinfo.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    MetaDataModule,
    FarmerInfoModule,
    RegionModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
