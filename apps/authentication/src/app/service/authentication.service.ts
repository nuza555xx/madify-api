import { AuthenticationService } from './authentication.abstract';
import { CONFIG_PROVIDE, ConfigKey } from '@madify-api/config';
import { ConfigService } from '@nestjs/config';
import { DateTime } from 'luxon';
import {
  IGenerateToken,
  IJwtConfig,
  ILoginWithEmail,
  IRefreshToken,
  IRegisterFirebase,
  IRegisterWithEmail,
  IResponseLogin,
} from '@madify-api/interface';
import { Injectable, HttpStatus, Inject } from '@nestjs/common';
import { Account, IRepository, REPOSITORY_PROVIDE } from '@madify-api/database';
import { JWT_PROVIDE, TokenService } from '@madify-api/jwt';
import { MadifyException } from '@madify-api/exception';
import { MadifyHash } from '@madify-api/common';

@Injectable()
export class AuthenticationImpl implements AuthenticationService {
  constructor(
    @Inject(REPOSITORY_PROVIDE) private readonly repository: IRepository,
    @Inject(JWT_PROVIDE) private readonly tokenService: TokenService,
    @Inject(CONFIG_PROVIDE) private readonly configService: ConfigService
  ) {}

  private async generateAllToken(account: Account): Promise<IGenerateToken> {
    const { accessTokenExpiresIn, refreshTokenExpiresIn, secret } =
      this.configService.get<IJwtConfig>(ConfigKey.JWT);

    const accessTokenExpiration = DateTime.now()
      .plus({ millisecond: accessTokenExpiresIn })
      .toJSDate();

    const refreshTokenExpiration = DateTime.fromJSDate(accessTokenExpiration)
      .plus({ millisecond: refreshTokenExpiresIn })
      .toJSDate();

    const [accessToken, refreshToken] = await Promise.all([
      this.tokenService.generate(
        { id: account._id, expirationDate: accessTokenExpiration },
        { expiresIn: accessTokenExpiresIn, secret }
      ),
      this.tokenService.generate(
        {
          id: account._id,
          expirationDate: refreshTokenExpiration,
          accessTokenExpireTime: accessTokenExpiration,
        },
        { expiresIn: refreshTokenExpiresIn, secret }
      ),
    ]);

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration,
      refreshTokenExpiration,
    };
  }

  async registerWithEmail(dto: IRegisterWithEmail): Promise<IResponseLogin> {
    if (![dto.platform, dto.uuid].every((exists) => exists))
      throw new MadifyException('MISSING_METADATA_HEADERS');

    dto.password = await MadifyHash.hash(dto.password);

    const isExists = await this.repository.findAccount(dto);
    if (isExists) throw new MadifyException('DUPLICATE_EMAIL');

    const account = await this.repository.createAccount(dto);
    if (!account) throw new MadifyException('NOT_FOUND_DATA');

    const token = await this.generateAllToken(account);

    (account.credentials ??= []).push({
      platform: dto.platform,
      uuid: dto.uuid,
      ...token,
    });
    await account.save();

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }

  async loginWithEmail(dto: ILoginWithEmail): Promise<IResponseLogin> {
    if (![dto.platform, dto.uuid].every((exists) => exists))
      throw new MadifyException('MISSING_METADATA_HEADERS');

    const account = await this.repository.findAccount(dto);
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    const isMatched = await MadifyHash.compare(dto.password, account.password);
    if (!isMatched) {
      throw new MadifyException('NOT_MATCH_PASSWORD');
    }

    const token = await this.generateAllToken(account);
    let credential = account.credentials.find(
      ({ uuid, platform }) => dto.uuid === uuid && dto.platform === platform
    );

    if (credential) {
      await this.repository.updateAccount(
        {
          id: account._id,
          credentials: {
            platform: dto.platform,
            uuid: dto.uuid,
          },
        },
        {
          $set: {
            'credentials.$': {
              platform: dto.platform,
              uuid: dto.uuid,
              ...token,
            },
          },
        }
      );
    } else {
      (account.credentials ??= []).push({
        platform: dto.platform,
        uuid: dto.uuid,
        ...token,
      });
      await account.save();
    }

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }

  async registerToken(
    { uuid, platform, firebaseToken }: IRegisterFirebase,
    account: Account
  ): Promise<void> {
    const device = account.devices?.find(
      (device) => uuid === device.uuid && platform === device.platform
    );

    if (device) device.firebaseToken = firebaseToken;
    else (account.devices ??= []).push({ uuid, platform, firebaseToken });

    account.markModified('devices');
    await account.save();
  }

  async unregisterToken(body: IRegisterFirebase, account: Account) {
    await this.repository.updateAccount(
      { id: account._id },
      {
        $pull: {
          devices: {
            uuid: body.uuid,
            platform: body.platform,
            firebaseToken: body.firebaseToken,
          },
        },
      }
    );
  }

  async refreshToken(dto: IRefreshToken): Promise<IResponseLogin> {
    if (![dto.platform, dto.uuid].every((exists) => exists))
      throw new MadifyException('MISSING_METADATA_HEADERS');

    const { secret } = this.configService.get<IJwtConfig>(ConfigKey.JWT);

    const decode = this.tokenService.isVerify(dto.refreshToken, { secret });

    const account = await this.repository.findAccount({
      id: decode.id,
      credentials: {
        refreshToken: dto.refreshToken,
      },
    });

    if (!account) throw new MadifyException('NOT_FOUND_DATA');

    const credential = account.credentials.find(
      ({ uuid, platform }) => dto.uuid === uuid && dto.platform === platform
    );

    if (!credential) throw new MadifyException('FORBIDDEN');

    if (new Date(credential.refreshTokenExpiration) < new Date())
      throw new MadifyException('INVALID_REFRESH_TOKEN');

    const token = await this.generateAllToken(account);

    await this.repository.updateAccount(
      {
        id: account._id,
        credentials: {
          platform: dto.platform,
          uuid: dto.uuid,
        },
      },
      {
        $set: {
          'credentials.$': {
            platform: dto.platform,
            uuid: dto.uuid,
            ...token,
          },
        },
      }
    );

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }
}
