import { estypes } from '@elastic/elasticsearch';
import { VehicleELS } from '../../interface/vehicle.interface';
import { VehicleQuery } from './repository.interface';

export abstract class ElasticRepository {
  abstract findVehicles(
    query: VehicleQuery,
    options?: estypes.SearchRequest
  ): Promise<VehicleELS[]>;
}
