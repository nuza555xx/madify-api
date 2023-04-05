import {
  Account,
  EntityVisibility,
  IRepository,
  REPOSITORY_PROVIDE,
} from "@madify-api/database";
import { ConfigKey, IJwtConfig } from "@madify-api/utils/config";
import { MadifyException } from "@madify-api/utils/exception";
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { FastifyRequest } from "fastify";

type AuthRequest = FastifyRequest & {
  $account: Account;
};

type TokenPayload = {
  id: string;
  expirationDate: string;
};

@Injectable()
export class AuthGuard implements CanActivate {
  private jwtToken = this.configService.get<IJwtConfig>(ConfigKey.JWT);

  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    if (type !== "Bearer" || !token)
      throw new MadifyException("MISSING_AUTHORIZATION_HEADERS");

    const payload = this.verifyToken(token);

    if (!payload) throw new MadifyException("INVALID_ACCESS_TOKEN");

    const id = payload.id;
    const account = await this.repository.findAccount({
      id,
      visibility: EntityVisibility.Publish,
      credentials: {
        accessToken: token,
        accessTokenExpiration: { $gte: new Date() },
      },
    });

    if (!account) throw new MadifyException("INVALID_ACCESS_TOKEN");

    request.$account = account;
    return true;
  }

  private verifyToken(token: string): TokenPayload {
    return this.jwtService.verify(token, {
      secret: this.jwtToken.secret,
    });
  }
}
