import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SparePartCategoryDocument = SparePartCategory & Document;

@Schema()
class SparePartItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop()
  image?: string;
}

@Schema({ timestamps: true })
export class SparePartCategory {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ type: [SparePartItem], default: [] })
  items: SparePartItem[];
}

export const SparePartCategorySchema = SchemaFactory.createForClass(SparePartCategory);
