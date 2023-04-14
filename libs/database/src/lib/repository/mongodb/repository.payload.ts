import {
  IResponseProfile,
  IResponseVehicle,
} from '../../interface/account.interface';
import { IVehicle } from '../../interface/vehicle.interface';
import { Account } from '../../schema/account.schema';
import { Vehicle } from '../../schema/vehicle.schema';

export class PayloadResponse {
  static toVehicleResponse<T>(
    vehicle: IVehicle | Vehicle,
    options?: Record<string, T>
  ): IResponseVehicle {
    return {
      id: vehicle._id,
      brand: vehicle.brand,
      model: vehicle.model,
      vehicleRegistration: vehicle.vehicleRegistration,
      registrationProvince: vehicle.registrationProvince,
      ...options,
    };
  }

  static toProfileResponse(account: Account): IResponseProfile {
    return {
      id: account._id,
      email: account.email,
      displayName: account.displayName,
      mobile: account.mobile,
    };
  }
}
