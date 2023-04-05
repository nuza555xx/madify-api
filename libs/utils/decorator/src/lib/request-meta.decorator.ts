import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { getClientIp } from "request-ip";

export class RequestMetadata {
  device?: string;
  platform?: string;
  hostUrl?: string;
  ip?: string;
  userAgent?: string;
  source?: string;
  uuid?: string;

  constructor(dto: Partial<RequestMetadata>) {
    this.platform = dto.platform;
    this.hostUrl = dto.hostUrl;
    this.ip = dto.ip;
    this.userAgent = dto.userAgent;
    this.source = dto.source;
    this.uuid = dto.uuid;
  }
}

const getSource = (req: FastifyRequest): string | undefined => {
  const header = req.headers["api-metadata"]
    ? req.headers["api-metadata"]
    : req.headers["API-Metadata"];
  const metadata = Array.isArray(header) ? header : header?.split(",");
  const sourceQuery = metadata?.find((meta) => meta.split("=")[0] === "src");
  const source = sourceQuery?.split("=")[1];
  return source;
};

export const RequestMeta = createParamDecorator(
  async (property: keyof RequestMetadata, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<FastifyRequest>();
    const requestMetadata = new RequestMetadata({
      platform: req.headers["platform"] as string,
      device: req.headers["device"] as string,
      uuid: req.headers["uuid"] as string,
      hostUrl: `${req.protocol}://${req.hostname}`,
      ip: getClientIp(req) || undefined,
      userAgent: req.headers["user-agent"] as string,
      source: getSource(req),
    });

    return property ? requestMetadata[property] : requestMetadata;
  }
) as (property?: keyof RequestMetadata) => ParameterDecorator;
