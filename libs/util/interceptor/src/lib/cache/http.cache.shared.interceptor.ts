import {
  CACHE_KEY_METADATA,
  CacheInterceptor,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Injectable()
export class HttpCacheSharedWithQueryInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const cacheKey = this.reflector.get(
      CACHE_KEY_METADATA,
      context.getHandler()
    );

    if (cacheKey) {
      const request = context.switchToHttp().getRequest<FastifyRequest>();

      return `${cacheKey}-${request.url}`;
    }

    return super.trackBy(context);
  }
}
