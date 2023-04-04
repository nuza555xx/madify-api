import { EntityVisibility } from '@madify-api/enum';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

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
