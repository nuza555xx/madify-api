import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';
import { DecodeOptions } from 'jsonwebtoken';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  generate(payload: string | object, options: JwtSignOptions) {
    return this.jwtService.sign(payload, options);
  }

  decode(token: string, options: DecodeOptions) {
    return this.jwtService.decode(token, options);
  }

  isVerify(token: string, options: JwtVerifyOptions) {
    return this.jwtService.verify(token, options);
  }
}
