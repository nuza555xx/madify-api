import { Module } from "@nestjs/common";
import { HttpCacheClearInterceptor } from "./cache/http.cache.clear.interceptor";
import { HttpCacheIndividualInterceptor } from "./cache/http.cache.individual.interceptor";
import { HttpCacheSharedWithQueryInterceptor } from "./cache/http.cache.shared.interceptor";
import { AuthGuard } from "./guard/auth.guard";
import { MadifyRestLogger } from "./logger/logging.interceptor";

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class MadifyUtilsInterceptorModule {}

export {
  AuthGuard,
  HttpCacheClearInterceptor,
  HttpCacheIndividualInterceptor,
  HttpCacheSharedWithQueryInterceptor,
  MadifyRestLogger,
};
