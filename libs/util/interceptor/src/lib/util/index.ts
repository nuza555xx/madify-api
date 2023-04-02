import { MadifyException } from '@madify-api/exception';
import { HttpStatus } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const getTokenFromRequest = (request: FastifyRequest) => {
  const token = request.headers.authorization?.replace(/^bearer /i, '');
  if (!token) throw new MadifyException('MISSING_AUTHORIZATION_HEADERS');

  return token;
};
