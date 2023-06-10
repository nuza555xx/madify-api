import { APIPrefix, RedisCacheKey } from '@madify-api/utils/config';
import {
  MadifyController,
  MadifySharedCached,
} from '@madify-api/utils/decorator';
import { Get, HttpCode, HttpStatus, Param, Query } from '@nestjs/common';
import { GetSearchVehicleQuery } from './dto/vehicle.dto';
import { VehicleService } from './service/vehicle.abstract';

@MadifyController({ path: APIPrefix.VEHICLE })
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('health')
  @HttpCode(HttpStatus.OK)
  healthCheck(): boolean {
    return true;
  }

  @Get('search')
  @MadifySharedCached(RedisCacheKey.VEHICLE)
  listVehicle(@Query() query: GetSearchVehicleQuery) {
    return this.vehicleService.listVehicle(query);
  }

  @Get('brand')
  listVehicleBrand() {
    return this.vehicleService.listVehicleBrand();
  }

  @Get('model/:slug')
  listVehicleModel(@Param('slug') brand: string) {
    return this.vehicleService.listVehicleModel(brand);
  }
}
