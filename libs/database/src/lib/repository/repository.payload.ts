import { IResponseVehicle, IResponseProfile } from '@madify-api/interface';
import { Account } from '../schema/account.schema';
import { Vehicle } from '../schema/vehicle.schema';

export class PayloadResponse {
  static toVehicleResponse(vehicle: Vehicle): IResponseVehicle {
    return vehicle;
  }

  static toProfileResponse(account: Account): IResponseProfile {
    return {
      email: account.email,
      displayName: account.displayName,
      mobile: account.mobile,
    };
  }
}
