import { estypes } from '@elastic/elasticsearch';
import { Vehicle } from '../../schema/vehicle.schema';
import { VehicleQuery } from './repository.interface';

export abstract class IElasticRepository {
  abstract findVehicles(
    query: VehicleQuery,
    options?: estypes.SearchRequest
  ): Promise<Vehicle[]>;
}
