import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  CACHE_KEY_METADATA,
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Cache } from 'cache-manager';
import { Observable } from 'rxjs';
@Injectable()
export class HttpCacheSharedClearInterceptor implements NestInterceptor {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private reflector: Reflector
  ) {}

  async intercept(
    ctx: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<unknown>> {
    const cacheKey = this.reflector.get(CACHE_KEY_METADATA, ctx.getHandler());
    if (cacheKey) {
      const keys = await this.cacheManager.store.keys();
      const cacheKeys = keys.filter((key: string) => {
        return key.match(cacheKey);
      });
      await Promise.all(cacheKeys.map((key) => this.cacheManager.del(key)));
    }

    return next.handle();
  }
}
