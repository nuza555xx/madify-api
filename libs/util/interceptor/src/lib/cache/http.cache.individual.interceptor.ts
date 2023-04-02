import {
  CACHE_KEY_METADATA,
  CacheInterceptor,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { FastifyRequest } from 'fastify';
import { getTokenFromRequest } from '../util';
@Injectable()
export class HttpCacheIndividualInterceptor extends CacheInterceptor {
  trackBy(ctx: ExecutionContext): string | undefined {
    const cacheManager = this.cacheManager as Cache;
    const cacheKey = this.reflector.get(CACHE_KEY_METADATA, ctx.getHandler());

    if (cacheKey) {
      const request = ctx.switchToHttp().getRequest<FastifyRequest>();
      const token = getTokenFromRequest(request);
      const finalKey = `${cacheKey}-${token}-${request.url}}`;

      cacheManager.get<string>(token).then((settingString) => {
        const setting = JSON.parse(settingString || '{}');
        setting[finalKey] = true;
        cacheManager.set(token, JSON.stringify(setting));
      });

      return finalKey;
    }

    return super.trackBy(ctx);
  }
}
