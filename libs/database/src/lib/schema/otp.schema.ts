import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { BaseSchema } from "./base.schema";

@Schema()
export class Otp extends BaseSchema {
  @Prop({ type: SchemaTypes.ObjectId, index: true })
  accountId: Types.ObjectId;

  @Prop({ type: SchemaTypes.String })
  action: string;

  @Prop({ type: SchemaTypes.String })
  refCode: string;

  @Prop({ type: SchemaTypes.Date })
  expireDate: Date;

  @Prop({ type: [SchemaTypes.Date], default: [] })
  sentAt: Date[];

  @Prop({ type: SchemaTypes.Number, default: 0 })
  retry: number;

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isVerify: boolean;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
