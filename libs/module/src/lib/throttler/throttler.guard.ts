import { MadifyException } from '@madify-api/exception';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { FastifyRequest } from 'fastify';
import { getClientIp } from 'request-ip';

@Injectable()
export class MadifyThrottlerGuard extends ThrottlerGuard {
  override throwThrottlingException(): void {
    throw new MadifyException('RATE_LIMIT_REQUEST');
  }

  override getTracker(req: FastifyRequest): string {
    const ip = getClientIp(req);
    const userAgent = req.headers['user-agent'];
    const defaultTracker = `${ip}-${userAgent}`;

    return [
      defaultTracker,
      ...this.getTrackers(req.routerPath, req.body ?? {}),
    ].join('-');
  }

  private getTrackers(path: string, body: any) {
    if (path.includes('register-with-email')) {
      return [body.email];
    }

    if (path.includes('login-with-email')) {
      return [body.email];
    }

    return [];
  }
}
