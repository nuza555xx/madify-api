import { MadifyException } from '@madify-api/utils/exception';
import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  CACHE_KEY_METADATA,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { FastifyRequest } from 'fastify';

@Injectable()
export class HttpCacheIndividualInterceptor extends CacheInterceptor {
  trackBy(ctx: ExecutionContext): string | undefined {
    const cacheManager = this.cacheManager as Cache;
    const cacheKey = this.reflector.get(CACHE_KEY_METADATA, ctx.getHandler());

    if (cacheKey) {
      const request = ctx.switchToHttp().getRequest<FastifyRequest>();
      const token = this.getTokenFromRequest(request);
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

  private getTokenFromRequest(request: FastifyRequest) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!token) throw new MadifyException('MISSING_AUTHORIZATION_HEADERS');

    return type === 'Bearer' ? token : undefined;
  }
}
