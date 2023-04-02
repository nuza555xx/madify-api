import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class VehicleBrand extends BaseSchema {
  @Prop({ type: SchemaTypes.String, required: true })
  name: string;

  @Prop({ type: SchemaTypes.String, required: true })
  slug: string;

  @Prop({ type: SchemaTypes.String })
  imageKey: string;
}

export const VehicleBrandSchema = SchemaFactory.createForClass(VehicleBrand);
