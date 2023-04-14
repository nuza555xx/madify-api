import { estypes } from '@elastic/elasticsearch';
import {
  ICreateVehicle,
  IElasticRepository,
  IGetVehicleList,
  IMongoRepository,
  IResponseVehicle,
  Meta,
  PayloadResponse,
  REPOSITORY_ELS_PROVIDE,
  REPOSITORY_MONGO_PROVIDE,
  ResponseDto,
  Sorting,
} from '@madify-api/database';
import { MadifyLogger } from '@madify-api/utils/common';
import { MadifyException } from '@madify-api/utils/exception';
import { STORAGE_PROVIDE, StorageService } from '@madify-api/utils/provider';
import { Inject, Injectable } from '@nestjs/common';
import { VehicleService } from './vehicle.abstract';

@Injectable()
export class VehicleImpl implements VehicleService {
  private readonly logger = new MadifyLogger(VehicleService.name);
  constructor(
    @Inject(REPOSITORY_MONGO_PROVIDE)
    private readonly repositoryMongo: IMongoRepository,
    @Inject(REPOSITORY_ELS_PROVIDE)
    private readonly repositoryElastic: IElasticRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService
  ) {}

  async createVehicle(
    body: ICreateVehicle,
    accountId: string
  ): Promise<IResponseVehicle> {
    const vehicle = await this.repositoryMongo.createVehicle({
      ...body,
      accountId: accountId,
    });

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    return PayloadResponse.toVehicleResponse(vehicle);
  }

  async listVehicle({
    skip = 0,
    limit,
    sorting,
    ...query
  }: IGetVehicleList): Promise<ResponseDto<IResponseVehicle[]>> {
    const queryOptions: estypes.SearchRequest = {
      from: skip,
      size: limit,
      sort: {
        _score: { order: sorting ?? Sorting.DESC },
      } as estypes.SortOptions,
    };

    this.logger.time('Vehicle search');

    const vehicles = await this.repositoryElastic.findVehicles(
      {
        ...query,
      },
      queryOptions
    );

    this.logger.timeEnd('Vehicle search');

    const vehiclesResponse = await Promise.all(
      vehicles.map(async (vehicle) => {
        const [imageVehicle, imageBrand] = await Promise.all([
          this.storage.generateSignedUrl(vehicle.imageKey),
          this.storage.generateSignedUrl(vehicle.brand.imageKey),
        ]);

        return PayloadResponse.toVehicleResponse(vehicle, {
          image: imageVehicle,
          brand: {
            id: vehicle.brand._id,
            name: vehicle.brand.name,
            image: imageBrand,
          },
        });
      })
    );

    return ResponseDto.ok<IResponseVehicle[]>({
      payload: vehiclesResponse,
      meta: Meta.fromDocuments(vehicles, skip, limit),
    });
  }
}
