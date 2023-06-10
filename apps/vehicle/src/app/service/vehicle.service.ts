import { estypes } from '@elastic/elasticsearch';
import {
  ElasticRepository,
  GetVehicleList,
  Meta,
  MongoRepository,
  PayloadResponse,
  REPOSITORY_ELS_PROVIDE,
  REPOSITORY_MONGO_PROVIDE,
  ResponseDto,
  ResponseVehicle,
  ResponseVehicleBrand,
  ResponseVehicleModel,
  Sorting,
} from '@madify-api/database';
import { MadifyLogger } from '@madify-api/utils/common';
import { STORAGE_PROVIDE, StorageService } from '@madify-api/utils/provider';
import { Inject, Injectable } from '@nestjs/common';
import { VehicleService } from './vehicle.abstract';

@Injectable()
export class VehicleImpl implements VehicleService {
  private readonly logger = new MadifyLogger(VehicleService.name);
  constructor(
    @Inject(REPOSITORY_MONGO_PROVIDE)
    private readonly repositoryMongo: MongoRepository,
    @Inject(REPOSITORY_ELS_PROVIDE)
    private readonly repositoryElastic: ElasticRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService
  ) {}

  async listVehicle({
    skip = 0,
    limit,
    sorting,
    ...query
  }: GetVehicleList): Promise<ResponseDto<ResponseVehicle[]>> {
    const queryOptions: estypes.SearchRequest = {
      from: skip,
      size: limit,
      sort: {
        _score: { order: sorting ?? Sorting.DESC },
      } as estypes.SortOptions,
    };

    this.logger.time('Vehicle search');

    const vehicles = await this.repositoryElastic.findVehicles(
      { ...query },
      queryOptions
    );

    this.logger.timeEnd('Vehicle search');

    const vehiclesResponse = await Promise.all(
      vehicles.map(async (vehicle) => {
        const [image, imageBrand] = await Promise.all([
          this.storage.generateSignedUrl(vehicle.image.thumbnail.key),
          this.storage.generateSignedUrl(vehicle.brand.imageKey),
        ]);

        return PayloadResponse.toVehicleResponse(vehicle, {
          imageVehicle: {
            width: vehicle.image.thumbnail.width,
            height: vehicle.image.thumbnail.height,
            key: vehicle.image.thumbnail.key,
            url: image,
          },
          imageBrand,
        });
      })
    );

    return ResponseDto.ok<ResponseVehicle[]>({
      payload: vehiclesResponse,
      meta: Meta.fromDocuments(vehicles, skip, limit),
    });
  }

  async listVehicleBrand(): Promise<ResponseVehicleBrand[]> {
    const brands = await this.repositoryMongo.findVehicleBrands({});

    return Promise.all(
      brands.map(async (brand) => {
        const imageBrand = await this.storage.generateSignedUrl(brand.imageKey);
        return PayloadResponse.toVehicleBrandResponse(brand, { imageBrand });
      })
    );
  }

  async listVehicleModel(brand: string): Promise<ResponseVehicleModel[]> {
    const models = await this.repositoryMongo.findVehicleModels({ brand });

    return Promise.all(
      models.map(async (model) => {
        return PayloadResponse.toVehicleModelResponse(model);
      })
    );
  }
}
