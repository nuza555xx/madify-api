import { MadifyException } from "@madify-api/utils/exception";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { FastifyRequest } from "fastify";

export const BearerToken = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest<FastifyRequest>().headers;

    const [type, token] = headers.authorization?.split(" ") ?? [];
    if (!token) throw new MadifyException("MISSING_AUTHORIZATION_HEADERS");

    return type === "Bearer" ? token : undefined;
  }
);
