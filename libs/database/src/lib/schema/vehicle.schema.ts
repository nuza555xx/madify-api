import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Vehicle extends BaseSchema {
  @Prop({ type: SchemaTypes.ObjectId, index: true, required: true })
  accountId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, index: true, required: true })
  insureId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, index: true, required: true })
  brandId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, index: true, required: true })
  generationId: Types.ObjectId;

  @Prop({ type: SchemaTypes.String, index: true, required: true })
  expiredYear: string;

  @Prop({ type: SchemaTypes.Decimal128 })
  insureRangeAmount?: number;

  @Prop({ type: String, index: true, required: true })
  vehicleRegistration: string;

  @Prop({ type: String, index: true, required: true })
  registrationProvince: string;

  @Prop({ type: String, index: true, required: true })
  registrationCountry: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)
  .index({ accountId: 1 })
  .index({ insureId: 1 })
  .index({ brandId: 1 })
  .index({ generationId: 1 })
  .index({ vehicleRegistration: 1 })
  .index({ vehicleRegistration: 1 })
  .index({ registrationCountry: 1 });
