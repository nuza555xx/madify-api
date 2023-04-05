import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { BaseSchema, Name } from "./base.schema";

@Schema({ timestamps: true })
export class Province extends BaseSchema {
  @Prop({ type: Name, required: true })
  name: Name;

  @Prop({ type: SchemaTypes.String, required: true })
  slug: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province)
  .index({ name: 1 }, { background: true })
  .index({ "name.th": 1 }, { background: true })
  .index({ "name.en": 1 }, { background: true })
  .index({ slug: 1 }, { unique: true, background: true });
