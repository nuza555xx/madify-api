import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyHelmet from '@fastify/helmet';
import compression from '@fastify/compress';
import fastifyCsrf from '@fastify/csrf-protection';
import { APIPrefix } from '@madify-api/config';
import { Documentation, getHelmetOptions } from '@madify-api/common';
import { MadifyExceptionFilter } from '@madify-api/exception';
import { MadifyRestLogger } from '@madify-api/interceptor';
import { startCase } from 'lodash';
import { UserModule } from './app/user.module';

async function bootstrap() {
  const prefix = APIPrefix.USER;
  const port = process.env.PORT || 3001;
  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    UserModule,
    fastifyAdapter
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new MadifyExceptionFilter());
  app.useGlobalInterceptors(new MadifyRestLogger());

  const path = `${prefix}/documentations`;
  if (process.env.NODE_ENV === 'development')
    Documentation.setup(startCase(prefix), path, app);

  await app.register(fastifyCsrf);
  await app.register(fastifyHelmet, getHelmetOptions);
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.listen(port, '0.0.0.0');

  Logger.debug(`🚀 Application is running on: ${await app.getUrl()}/${path}`);
  Logger.log(`🚀 Environment at ${process.env.NODE_ENV}`);
}

bootstrap();
