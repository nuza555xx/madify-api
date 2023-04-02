import { APIPrefix, RedisCacheKey } from '@madify-api/config';
import {
  Auth,
  Authorizer,
  MadifyAuthorize,
  MadifyCached,
  MadifyController,
} from '@madify-api/decorator';
import { VehicleService } from './service/vehicle.abstract';
import { Get, Query } from '@nestjs/common';
import { GetSearchVehicleQuery } from './vehicle.dto';

@MadifyController({ path: APIPrefix.VEHICLE })
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('search')
  @MadifyCached(RedisCacheKey.VEHICLE)
  listVehicle(@Query() query: GetSearchVehicleQuery) {
    return this.vehicleService.listVehicle(query);
  }
}
