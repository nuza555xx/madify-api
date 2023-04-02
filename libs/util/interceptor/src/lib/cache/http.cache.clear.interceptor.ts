import { FastifyRequest } from 'fastify';
import {
  CACHE_KEY_METADATA,
  CACHE_MANAGER,
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Cache } from 'cache-manager';
import { getTokenFromRequest } from '../util';
import { Observable } from 'rxjs';

@Injectable()
export class HttpCacheClearInterceptor implements NestInterceptor {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private reflector: Reflector
  ) {}

  async intercept(
    ctx: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const cacheKey = this.reflector.get(CACHE_KEY_METADATA, ctx.getHandler());
    if (cacheKey) {
      const context = ctx.switchToHttp();
      const request = context.getRequest<FastifyRequest>();
      const token = getTokenFromRequest(request);

      const settingsString = await this.cacheManager.get<string>(token);
      const settings = settingsString ? JSON.parse(settingsString) : {};

      const key = `${cacheKey}-${request.url}`;
      const settingsKeyString = await this.cacheManager.get<string>(key);
      const settingsKey = settingsKeyString
        ? JSON.parse(settingsKeyString)
        : {};

      await Promise.all([
        ...Object.keys(settings).map((delKey) => this.cacheManager.del(delKey)),
        ...Object.keys(settingsKey).map((delKey) =>
          this.cacheManager.del(delKey)
        ),
        this.cacheManager.del(token),
        this.cacheManager.del(key),
      ]);
    }

    return next.handle();
  }
}
