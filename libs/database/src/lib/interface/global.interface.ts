import { ApiProperty } from '@nestjs/swagger';
import { AcceptPlatform } from '../enum/user.enum';

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

export class RequestMetadata {
  device?: string;
  platform?: AcceptPlatform;
  hostUrl?: string;
  ip?: string;
  userAgent?: string;
  source?: string;
  uuid?: string;
}
