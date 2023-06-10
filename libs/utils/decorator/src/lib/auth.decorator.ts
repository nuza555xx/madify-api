import { AcceptPlatform, CacheOption } from '@madify-api/database';
import {
  AuthGuard,
  HttpCacheClearInterceptor,
  HttpCacheIndividualInterceptor,
  HttpCacheSharedClearInterceptor,
  HttpCacheSharedWithQueryInterceptor,
} from '@madify-api/utils/interceptor';
import { CacheKey } from '@nestjs/cache-manager';
import {
  CacheTTL,
  UseGuards,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';
import { ApiBearerAuth, ApiHeaders } from '@nestjs/swagger';

export const MadifyAuthorize = (cacheConfig: CacheOption) => {
  return applyDecorators(
    ApiBearerAuth('JSON Web Token Authorization'),
    CacheKey(cacheConfig.name),
    CacheTTL(cacheConfig.ttl),
    UseInterceptors(HttpCacheIndividualInterceptor),
    UseGuards(AuthGuard)
  );
};

export const MadifyBasicAuthorize = () => {
  return applyDecorators(
    ApiBearerAuth('JSON Web Token Authorization'),
    UseGuards(AuthGuard)
  );
};

export const MadifyAuthorizeAndClearCached = (cacheConfig: CacheOption) => {
  return applyDecorators(
    ApiBearerAuth('JSON Web Token Authorization'),
    CacheKey(cacheConfig.name),
    UseGuards(AuthGuard),
    UseInterceptors(HttpCacheClearInterceptor, HttpCacheSharedClearInterceptor)
  );
};

export const MadifySharedCached = (cacheConfig: CacheOption) => {
  return applyDecorators(
    CacheKey(cacheConfig.name),
    CacheTTL(cacheConfig.ttlShared),
    UseInterceptors(HttpCacheSharedWithQueryInterceptor)
  );
};

export const MadifySwaggerHeaderAuth = () => {
  return applyDecorators(
    ApiHeaders([
      {
        name: 'platform',
        description: 'This header is required',
        enum: AcceptPlatform,
        example: AcceptPlatform.Web,
        required: true,
      },
      {
        name: 'uuid',
        description: 'This header is required',
        example: 'uuid',
        required: true,
      },
    ])
  );
};
