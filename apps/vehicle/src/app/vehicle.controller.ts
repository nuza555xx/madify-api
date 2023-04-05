import { APIPrefix, RedisCacheKey } from '@madify-api/utils/config';
import {
  MadifyController,
  MadifySharedCached,
} from '@madify-api/utils/decorator';
import { Get, Query } from '@nestjs/common';
import { GetSearchVehicleQuery } from './dto/vehicle.dto';
import { VehicleService } from './service/vehicle.abstract';

@MadifyController({ path: APIPrefix.VEHICLE })
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('search')
  @MadifySharedCached(RedisCacheKey.VEHICLE)
  listVehicle(@Query() query: GetSearchVehicleQuery) {
    return this.vehicleService.listVehicle(query);
  }
}
