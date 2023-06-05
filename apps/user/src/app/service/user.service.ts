import { estypes } from '@elastic/elasticsearch';
import {
  EntityVisibility,
  ICreateVehicle,
  IElasticRepository,
  IGetVehicleList,
  IMongoRepository,
  IResponseProfile,
  IResponseVehicle,
  IUpdateProfile,
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
import { Types } from 'mongoose';
import { UserService } from './user.abstract';

@Injectable()
export class UserImpl implements UserService {
  private readonly logger = new MadifyLogger(UserService.name);

  constructor(
    @Inject(REPOSITORY_MONGO_PROVIDE)
    private readonly repositoryMongo: IMongoRepository,
    @Inject(REPOSITORY_ELS_PROVIDE)
    private readonly repositoryElastic: IElasticRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService
  ) {}

  async getProfile(accountId: string): Promise<IResponseProfile> {
    const account = await this.repositoryMongo.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    return PayloadResponse.toProfileResponse(account);
  }

  async updateProfile(
    body: IUpdateProfile,
    accountId: string
  ): Promise<IResponseProfile> {
    const account = await this.repositoryMongo.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    account.set(body);
    await account.save();

    return PayloadResponse.toProfileResponse(account);
  }

  async createVehicle(
    body: ICreateVehicle,
    accountId: string
  ): Promise<IResponseVehicle> {
    const vehicle = await this.repositoryMongo.createVehicle({
      ...body,
      accountId: new Types.ObjectId(accountId),
      visibility: EntityVisibility.Pending,
    });

    if (body.image)
      vehicle.imageKey = await this.storage.uploadFile(
        `vehicle/${vehicle.id}/${vehicle.id}`,
        body.image
      );

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    const image = body.image
      ? await this.storage.generateSignedUrl(vehicle.imageKey)
      : null;

    await vehicle.save();
    return PayloadResponse.toVehicleResponse(vehicle, { imageUrl: image });
  }

  async listVehicle(
    { skip = 0, limit, sorting, ...query }: IGetVehicleList,
    accountId: string
  ): Promise<ResponseDto<IResponseVehicle[]>> {
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
        accountId,
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
