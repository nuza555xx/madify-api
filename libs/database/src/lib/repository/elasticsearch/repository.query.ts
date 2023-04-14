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
            'brand.name.th',
            'brand.name.en',
            'brand.name.slug',
            'model.name.th',
            'model.name.en',
            'model.name.slug',
            'registrationProvince.name.th',
            'registrationProvince.name.en',
            'registrationProvince.name.slug',
            'vehicleRegistration',
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
