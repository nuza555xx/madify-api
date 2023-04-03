import { IResponseVehicle, IResponseProfile } from '@madify-api/interface';
import { Account } from '../schema/account.schema';
import { Vehicle } from '../schema/vehicle.schema';

export class PayloadResponse {
  static async toVehicleResponse(
    vehicle: Vehicle,
    options?: Record<string, any>
  ): Promise<IResponseVehicle> {
    return {
      brand: vehicle.brand,
      model: vehicle.model,
      vehicleRegistration: vehicle.vehicleRegistration,
      registrationProvince: vehicle.registrationProvince,
      ...options,
    };
  }

  static toProfileResponse(account: Account): IResponseProfile {
    return {
      email: account.email,
      displayName: account.displayName,
      mobile: account.mobile,
    };
  }
}
