import { ResponseProfile } from '../../interface/account.interface';
import { ResponseOptions } from '../../interface/global.interface';
import {
  ResponseVehicle,
  ResponseVehicleBrand,
  ResponseVehicleModel,
  VehicleELS,
} from '../../interface/vehicle.interface';
import { Account } from '../../schema/account.schema';
import { VehicleBrand } from '../../schema/vehicle.brand.schema';
import { VehicleModel } from '../../schema/vehicle.model.schema';

export class PayloadResponse {
  static toVehicleResponse(
    vehicle: VehicleELS,
    options?: ResponseOptions
  ): ResponseVehicle {
    return {
      id: vehicle.id,
      model: vehicle.model.name,
      image: options.imageVehicle,
      vehicleRegistration: vehicle.vehicleRegistration,
      registrationProvince: vehicle.registrationProvince.name,
      brand: {
        name: vehicle.brand.name,
        url: options.imageBrand,
      },
    };
  }

  static toProfileResponse(account: Account): ResponseProfile {
    return {
      id: account._id,
      email: account.email,
      displayName: account.displayName,
      mobile: account.mobile,
    };
  }

  static toVehicleBrandResponse(
    brand: VehicleBrand,
    options?: ResponseOptions
  ): ResponseVehicleBrand {
    return {
      id: brand.id,
      slug: brand.slug,
      name: brand.name,
      url: options.imageBrand,
    };
  }

  static toVehicleModelResponse(model: VehicleModel): ResponseVehicleModel {
    return {
      id: model.id,
      slug: model.slug,
      name: model.name,
    };
  }
}
