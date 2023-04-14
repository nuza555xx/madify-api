import { estypes } from '@elastic/elasticsearch';
import { VehicleQuery } from './repository.interface';

export class PrepareQuery {
  findVehicleFilters(query: VehicleQuery): estypes.QueryDslQueryContainer {
    const filters: estypes.QueryDslQueryContainer[] = [];

    if (query?.search)
      filters.push({
        multi_match: {
          query: query.search,
          fields: [
            'brand',
            'model',
            'vehicleRegistration',
            'registrationProvince',
          ],
        },
      });

    if (query?.accountId)
      filters.push({
        match: { 'accountId.keyword': query.accountId },
      });

    return filters.length
      ? { bool: { must: filters } }
      : { bool: { must: { match_all: {} } } };
  }
}
