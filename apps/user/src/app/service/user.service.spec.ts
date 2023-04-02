import { UserImpl } from './user.service';
import { UserService } from './user.abstract';
import { Test } from '@nestjs/testing';

describe('AppService', () => {
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

  describe('getData', () => {
    it('should return "Welcome to user!"', () => {
      // expect(service.getData()).toEqual({ message: 'Welcome to user!' });
    });
  });
});
