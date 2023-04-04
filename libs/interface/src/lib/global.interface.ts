import { Account } from '@madify-api/database';
import { ApiProperty } from '@nestjs/swagger';
export interface IJwtConfig {
  secret: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface IRedisConfig {
  host: string;
  port: number;
  db: number;
  ttl: number;
  store?: unknown;
}

export interface IMongooseConfig {
  uri: string;
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export interface IThrottlerConfig {
  limit: number;
  ttl: number;
}

export interface IStorageConfig {
  projectId: string;
  clientEmail: string;
  clientId: string;
  privateKey: string;
  bucketName: string;
  expired: number;
}

export class Meta {
  previous?: number;
  next?: number;
  resultCount: number;
  resultTotal?: number;

  static fromDocuments = (
    documents: any[],
    skip?: number,
    limit?: number,
    resultTotal?: number
  ): Meta => {
    return {
      previous: skip,
      next: (skip ?? 0) + limit,
      resultCount: documents.length,
      resultTotal,
    };
  };
}

export class ResponseDto<T = any> {
  @ApiProperty()
  payload: T;

  @ApiProperty()
  meta?: Meta;

  static ok = <U1>({ meta, payload }: ResponseDto<U1>) => {
    const responseDto = new ResponseDto<U1>();

    responseDto.payload = payload;
    responseDto.meta ??= meta;

    return responseDto;
  };
}
