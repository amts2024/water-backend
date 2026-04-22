import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SparePartsController } from './spare-parts.controller';
import { SparePartsService } from './spare-parts.service';
import { SparePartCategory, SparePartCategorySchema } from './schemas/spare-part.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SparePartCategory.name, schema: SparePartCategorySchema }]),
  ],
  controllers: [SparePartsController],
  providers: [SparePartsService],
  exports: [SparePartsService],
})
export class SparePartsModule {}
