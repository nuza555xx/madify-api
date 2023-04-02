import { MadifyException } from '@madify-api/exception';
import { HttpStatus } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const getTokenFromRequest = (request: FastifyRequest) => {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  if (!token) throw new MadifyException('MISSING_AUTHORIZATION_HEADERS');

  return type === 'Bearer' ? token : undefined;
};
