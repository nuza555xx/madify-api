import { MadifyLogger } from '@madify-api/common';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { MadifyError, MadifyException } from './exception';
import { MongooseError } from 'mongoose';

@Catch(MadifyException)
export class MadifyExceptionFilter implements ExceptionFilter {
  private logger = new MadifyLogger(MadifyExceptionFilter.name);

  catch(exception: MadifyException, host: ArgumentsHost) {
    this.logger.error(exception);

    const context = host.switchToHttp();
    const exceptionHTTP = exception.getLocalizedException();

    const statusCode = exceptionHTTP.getStatus();

    return context
      .getResponse<FastifyReply>()
      .status(statusCode)
      .send(exceptionHTTP.getResponse());
  }
}
