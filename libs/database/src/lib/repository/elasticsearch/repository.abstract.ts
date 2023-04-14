import { estypes } from '@elastic/elasticsearch';
import { IVehicle } from '../../interface/vehicle.interface';
import { VehicleQuery } from './repository.interface';

export abstract class IElasticRepository {
  abstract findVehicles(
    query: VehicleQuery,
    options?: estypes.SearchRequest
  ): Promise<IVehicle[]>;
}
