import { Test } from "@nestjs/testing";
import { VehicleService } from "./vehicle.abstract";
import { VehicleImpl } from "./vehicle.service";
describe("VehicleService", () => {
  let service: VehicleService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: VehicleService,
          useClass: VehicleImpl,
        },
      ],
    }).compile();

    service = app.get<VehicleService>(VehicleService);
  });

  describe("getData", () => {
    it('should return "Welcome to vehicle!"', () => {
      // expect(service.getData()).toEqual({ message: 'Welcome to vehicle!' });
    });
  });
});
