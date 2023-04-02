import { AuthenticationService } from './authentication.abstract';
import { AuthenticationImpl } from './authentication.service';
import { Test } from '@nestjs/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: AuthenticationService,
          useClass: AuthenticationImpl,
        },
      ],
    }).compile();

    service = app.get<AuthenticationService>(AuthenticationService);
  });

  describe('getData', () => {
    it('should return "Welcome to authentication!"', () => {
      // expect(service.getData()).toEqual({
      //   message: 'Welcome to authentication!',
      // });
    });
  });
});
