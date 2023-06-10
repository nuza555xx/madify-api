import { estypes } from '@elastic/elasticsearch';
import { ElasticsearchIndexes } from '@madify-api/utils/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { VehicleELS } from '../../interface/vehicle.interface';
import { ElasticRepository } from './repository.abstract';
import { VehicleQuery } from './repository.interface';
import { PrepareQuery } from './repository.query';

@Injectable()
export class RepositoryElasticImpl implements ElasticRepository {
  private filters = new PrepareQuery();
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async findVehicles(
    query: VehicleQuery,
    options?: estypes.SearchRequest
  ): Promise<VehicleELS[]> {
    const elasticResult = await this.elasticsearchService.search<VehicleELS>({
      index: ElasticsearchIndexes.VEHICLE,
      query: this.filters.findVehicleFilters(query),
      ...options,
    });

    return elasticResult.hits.hits.map(({ _id, _source }) => {
      return {
        _id: _id,
        ..._source,
      } as VehicleELS;
    });
  }
}
