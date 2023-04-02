import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { FastifyReply, FastifyRequest } from 'fastify';
import { MadifyLogger } from '@madify-api/common';

@Injectable()
export class MadifyRestLogger implements NestInterceptor {
  private readonly logger = new MadifyLogger(MadifyRestLogger.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const { method, url } = context.switchToHttp().getRequest<FastifyRequest>();
    const { statusCode } = context.switchToHttp().getResponse<FastifyReply>();
    const message = `Incoming request - ${statusCode} - ${method} - ${url}`;
    this.logger.log(message);

    return next.handle().pipe(
      tap({
        next: (val) => this.logNext(val, context),
        error: (err) => this.logError(err, context),
      })
    );
  }

  private logNext(_: unknown, context: ExecutionContext): void {
    const { method, url } = context.switchToHttp().getRequest<FastifyRequest>();
    const { statusCode } = context.switchToHttp().getResponse<FastifyReply>();
    const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;

    if (
      [HttpStatus.OK, HttpStatus.CREATED, HttpStatus.NO_CONTENT].includes(
        statusCode
      )
    )
      this.logger.log(message);
    else this.logger.log(message);
  }

  private logError(
    error: Error | HttpException,
    context: ExecutionContext
  ): void {
    const { method, url } = context.switchToHttp().getRequest<FastifyRequest>();
    if (error instanceof HttpException) {
      const statusCode = error.getStatus();
      const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
      this.logger.error(message, error.stack ?? error);
    } else {
      this.logger.error(`Outgoing response - ${method} - ${url}`, error.stack);
    }
  }
}
