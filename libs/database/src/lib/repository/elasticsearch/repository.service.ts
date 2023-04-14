import { estypes } from '@elastic/elasticsearch';
import { ElasticsearchIndexes } from '@madify-api/utils/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Types } from 'mongoose';
import { Vehicle } from '../../schema/vehicle.schema';
import { IElasticRepository } from './repository.abstract';
import { VehicleQuery } from './repository.interface';
import { PrepareQuery } from './repository.query';

@Injectable()
export class RepositoryElasticImpl implements IElasticRepository {
  private filters = new PrepareQuery();
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async findVehicles(
    query: VehicleQuery,
    options?: estypes.SearchRequest
  ): Promise<Vehicle[]> {
    const elasticResult = await this.elasticsearchService.search<Vehicle>({
      index: ElasticsearchIndexes.VEHICLE,
      query: this.filters.findVehicleFilters(query),
      ...options,
    });

    return elasticResult.hits.hits.map(({ _id, _source }) => {
      return {
        _id: new Types.ObjectId(_id),
        ..._source,
      } as Vehicle;
    });
  }
}
