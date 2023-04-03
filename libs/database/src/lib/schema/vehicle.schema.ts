import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Vehicle extends BaseSchema {
  @Prop({ type: SchemaTypes.ObjectId, index: true, required: true })
  accountId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, index: true, required: true })
  insureId: Types.ObjectId;

  @Prop({ type: SchemaTypes.String, index: true, required: true })
  brand: string;

  @Prop({ type: SchemaTypes.String, index: true, required: true })
  model: string;

  @Prop({ type: SchemaTypes.Number, index: true, required: true })
  expiredYear: number;

  @Prop({ type: SchemaTypes.Decimal128 })
  insureRangeAmount?: number;

  @Prop({ type: String, index: true, required: true })
  vehicleRegistration: string;

  @Prop({ type: String, index: true, required: true })
  registrationProvince: string;

  @Prop({ type: String, index: true })
  registrationCountry?: string;

  @Prop({ type: SchemaTypes.String })
  imageKey?: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)
  .index({ accountId: 1 }, { background: true })
  .index({ insureId: 1 }, { background: true })
  .index({ brand: 'text' }, { background: true })
  .index({ model: 'text' }, { background: true })
  .index({ vehicleRegistration: 'text' }, { background: true })
  .index({ vehicleRegistration: 'text' }, { background: true })
  .index({ registrationCountry: 'text' }, { background: true });
