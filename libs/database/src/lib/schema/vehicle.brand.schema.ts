import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { SchemaTypes } from 'mongoose';

@Schema({ id: false, _id: false, versionKey: false })
class Name {
  @Prop({ type: SchemaTypes.String })
  th: string;

  @Prop({ type: SchemaTypes.String })
  en: string;
}
@Schema({ timestamps: true })
export class VehicleBrand extends BaseSchema {
  @Prop({ type: Name, required: true })
  name: Name;

  @Prop({ type: SchemaTypes.String, required: true })
  slug: string;

  @Prop({ type: SchemaTypes.String })
  imageKey?: string;
}

export const VehicleBrandSchema = SchemaFactory.createForClass(VehicleBrand)
  .index({ name: 1 }, { background: true })
  .index({ 'name.th': 1 }, { background: true })
  .index({ 'name.en': 1 }, { background: true })
  .index({ slug: 1 }, { unique: true, background: true });
