import { Prop, Schema } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { EntityVisibility } from '../enum/base.enum';

@Schema({ id: false, _id: false, versionKey: false })
export class BaseSchema extends Document {
  @Prop({ type: SchemaTypes.Date, default: new Date() })
  createdAt: Date;

  @Prop({ type: SchemaTypes.Date, default: new Date() })
  updatedAt: Date;

  @Prop({ type: SchemaTypes.String, default: EntityVisibility.Publish })
  visibility: EntityVisibility;
}

@Schema({ id: false, _id: false, versionKey: false })
export class Name {
  @Prop({ type: SchemaTypes.String })
  th: string;

  @Prop({ type: SchemaTypes.String })
  en: string;
}

@Schema({ id: false, _id: false, versionKey: false })
export class Resolution {
  @Prop({ type: SchemaTypes.String })
  key: string;

  @Prop({ type: SchemaTypes.Number })
  width: number;

  @Prop({ type: SchemaTypes.Number })
  height: number;
}

@Schema({ id: false, _id: false, versionKey: false })
export class ImageSchema {
  @Prop({ type: Resolution })
  thumbnail: Resolution;

  @Prop({ type: Resolution })
  original: Resolution;
}
