import { Account } from "@madify-api/database";
import { MadifyException } from "@madify-api/utils/exception";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export class Authorizer {
  constructor(public account: Account) {}

  requestAccessForAccount(accountId: any) {
    if (this.account.id === String(accountId)) return;

    throw new MadifyException("FORBIDDEN");
  }
}

export const Auth = createParamDecorator(
  async (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const account = await request.$account;
    return new Authorizer(account);
  }
);
