import { MadifyLogger } from '@madify-api/utils/common';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { MadifyException } from './exception';

@Catch(MadifyException)
export class MadifyExceptionFilter implements ExceptionFilter {
  private logger = new MadifyLogger(MadifyExceptionFilter.name);

  catch(exception: MadifyException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const exceptionHTTP = exception.getLocalizedException();

    this.logger.error(exceptionHTTP.stack);

    const statusCode = exceptionHTTP.getStatus();

    return context
      .getResponse<FastifyReply>()
      .status(statusCode)
      .send(exceptionHTTP.getResponse());
  }
}
