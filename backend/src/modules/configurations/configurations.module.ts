import { Module } from '@nestjs/common';
import { MetaDataModule } from './MetaData/meta.module';

@Module({
  imports: [
    MetaDataModule,
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
