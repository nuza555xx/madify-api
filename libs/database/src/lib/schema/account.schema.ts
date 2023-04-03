import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { SchemaTypes } from 'mongoose';

@Schema({ id: false, _id: false, versionKey: false })
class Credential {
  @Prop({ type: SchemaTypes.String })
  accessToken: string;

  @Prop({ type: SchemaTypes.Date })
  accessTokenExpiration: Date;

  @Prop({ type: SchemaTypes.String })
  refreshToken: string;

  @Prop({ type: SchemaTypes.Date })
  refreshTokenExpiration: Date;

  @Prop({ type: SchemaTypes.String })
  platform: string;

  @Prop({ type: SchemaTypes.String })
  uuid: string;
}

const CredentialSchema = SchemaFactory.createForClass(Credential);

@Schema({ id: false, _id: false, versionKey: false })
class Device {
  @Prop({ type: SchemaTypes.String })
  uuid: string;

  @Prop({ type: SchemaTypes.String })
  firebaseToken: string;

  @Prop({ type: SchemaTypes.String })
  platform?: string;
}

const DeviceSchema = SchemaFactory.createForClass(Device);

@Schema({ id: false, _id: false, versionKey: false })
class Activation {
  @Prop({ type: SchemaTypes.String })
  verifyToken: string;

  @Prop({ type: SchemaTypes.Date })
  verifyTokenExpireDate: Date;

  @Prop({ type: SchemaTypes.String })
  activationDate?: Date;
}

const ActivationSchema = SchemaFactory.createForClass(Activation);

@Schema({ id: false, _id: false, versionKey: false })
class Authentication {
  @Prop({ type: SchemaTypes.String, unique: true })
  socialId: string;

  @Prop({ type: SchemaTypes.String })
  socialToken?: string;

  @Prop({ type: SchemaTypes.String })
  avatar?: string;
}

const AuthenticationSchema = SchemaFactory.createForClass(Authentication);

@Schema({ timestamps: true })
export class Account extends BaseSchema {
  @Prop({ type: SchemaTypes.String, index: true, required: true, unique: true })
  email: string;

  @Prop({ type: SchemaTypes.String, required: true })
  password: string;

  @Prop({ type: SchemaTypes.String, required: true })
  displayName: string;

  @Prop({ type: SchemaTypes.Date })
  activateDate?: Date;

  @Prop({ type: Object })
  mobile?: {
    countryCode: string;
    number: string;
  };

  @Prop({ type: Object })
  geolocation?: {
    countryCode: string;
    continentCode: string;
  };

  @Prop({ type: [CredentialSchema], index: true })
  credentials?: Credential[];

  @Prop({ type: [AuthenticationSchema] })
  authentications?: Authentication;

  @Prop({ type: [ActivationSchema] })
  activations?: Activation[];

  @Prop({ type: [DeviceSchema] })
  devices?: Device[];
}

export const AccountSchema = SchemaFactory.createForClass(Account)
  .index({ email: 1 }, { background: true })
  .index({ 'authentications.socialId': 1 }, { background: true })
  .index({ 'credentials.accessToken': 1 }, { background: true })
  .index({ 'credentials.refreshToken': 1 }, { background: true })
  .index({ 'credentials.accessTokenExpiration': 1 }, { background: true })
  .index({ 'credentials.refreshExpiration': 1 }, { background: true })
  .index({ 'credentials.platform': 1 }, { background: true })
  .index({ 'credentials.uuid': 1 }, { background: true });
