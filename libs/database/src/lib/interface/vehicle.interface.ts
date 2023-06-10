import { EntityVisibility } from '../enum/base.enum';
import { Province } from '../schema/province.model.schema';
import { NameLocalize, ResponseResolution } from './global.interface';

export interface GetVehicleList {
  search?: string;
  skip: number;
  limit: number;
  sorting?: string;
}

export interface ResponseVehicleBrand {
  id?: string;
  slug: string;
  name: NameLocalize;
  url: string;
}

export interface ResponseVehicleModel {
  id?: string;
  slug: string;
  name: NameLocalize;
}

interface ResponseProvince {
  id?: string;
  name: string;
  slug: string;
}
export interface ResponseVehicle {
  id: string;
  brand: {
    name: NameLocalize;
    url: string;
  };
  model: NameLocalize;
  vehicleRegistration: string;
  registrationProvince: NameLocalize;
  image: ResponseResolution;
}

export class VehicleELS {
  id: string;
  accountId: string;
  insureId: string;
  brand: {
    slug: string;
    name: NameLocalize;
    imageKey: string;
  };
  model: {
    slug: string;
    name: NameLocalize;
  };
  expiredYear: number;
  insureRangeAmount?: number;
  vehicleRegistration: string;
  registrationProvince: Province;
  image: {
    thumbnail: {
      key: string;
      width: number;
      height: number;
    };
    original: {
      key: string;
      width: number;
      height: number;
    };
  };
  visibility: EntityVisibility;
}
