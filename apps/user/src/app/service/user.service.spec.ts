import { Test } from "@nestjs/testing";
import { UserService } from "./user.abstract";
import { UserImpl } from "./user.service";

describe("AppService", () => {
  let service: UserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserImpl,
        },
      ],
    }).compile();

    service = app.get<UserService>(UserService);
  });

  describe("getData", () => {
    it('should return "Welcome to user!"', () => {
      // expect(service.getData()).toEqual({ message: 'Welcome to user!' });
    });
  });
});
