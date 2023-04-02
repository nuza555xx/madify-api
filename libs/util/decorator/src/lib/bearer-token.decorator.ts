import { MadifyException } from '@madify-api/exception';
import {
  ExecutionContext,
  createParamDecorator,
  HttpStatus,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const BearerToken = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest<FastifyRequest>().headers;
    const token = headers.authorization?.replace(/^bearer /i, '');
    if (!token) throw new MadifyException('MISSING_AUTHORIZATION_HEADERS');

    return token;
  }
);
