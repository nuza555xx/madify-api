import {
  CreateVehicle,
  EntityVisibility,
  GetVehicleList,
  Meta,
  MongoRepository,
  PayloadResponse,
  REPOSITORY_MONGO_PROVIDE,
  ResponseDto,
  ResponseProfile,
  ResponseVehicle,
  UpdateProfile,
} from '@madify-api/database';
import { MadifyLogger } from '@madify-api/utils/common';
import { MadifyException } from '@madify-api/utils/exception';
import {
  IMAGE_PROVIDE,
  ImageService,
  STORAGE_PROVIDE,
  StorageService,
} from '@madify-api/utils/provider';
import { Inject, Injectable } from '@nestjs/common';
import { QueryOptions, Types } from 'mongoose';
import { UserService } from './user.abstract';

@Injectable()
export class UserImpl implements UserService {
  private readonly logger = new MadifyLogger(UserService.name);

  constructor(
    @Inject(REPOSITORY_MONGO_PROVIDE)
    private readonly repositoryMongo: MongoRepository,
    @Inject(STORAGE_PROVIDE) private readonly storage: StorageService,
    @Inject(IMAGE_PROVIDE) private readonly imageService: ImageService
  ) {}

  async getProfile(accountId: string): Promise<ResponseProfile> {
    const account = await this.repositoryMongo.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    return PayloadResponse.toProfileResponse(account);
  }

  async updateProfile(
    body: UpdateProfile,
    accountId: string
  ): Promise<ResponseProfile> {
    const account = await this.repositoryMongo.findAccount({ id: accountId });
    if (!account) {
      throw new MadifyException('NOT_FOUND_DATA');
    }

    account.set(body);
    await account.save();

    return PayloadResponse.toProfileResponse(account);
  }

  async createVehicle(
    { image, ...body }: CreateVehicle,
    accountId: string
  ): Promise<ResponseVehicle> {
    const vehicleExisting = await this.repositoryMongo.findVehicle({
      registrationProvince: body.registrationProvince,
      vehicleRegistration: body.vehicleRegistration,
    });

    if (vehicleExisting) throw new MadifyException('DATA_EXISTING');

    const vehicle = await this.repositoryMongo.createVehicle({
      ...body,
      accountId: new Types.ObjectId(accountId),
      visibility: EntityVisibility.Pending,
    });

    const { thumbnail, original } = await this.imageService.setImage(image);
    const [thumbnailKey, originalKey] = await Promise.all([
      this.storage.uploadFile(
        `vehicle/${vehicle.id}/${vehicle.id}-thumbnail`,
        thumbnail.base64,
        'webp'
      ),
      this.storage.uploadFile(
        `vehicle/${vehicle.id}/${vehicle.id}-original`,
        original.base64,
        'webp'
      ),
    ]);

    vehicle.image = {
      thumbnail: {
        key: thumbnailKey,
        width: thumbnail.width,
        height: thumbnail.height,
      },
      original: {
        key: originalKey,
        width: original.width,
        height: original.height,
      },
    };

    if (!vehicle) throw new MadifyException('SOMETHING_WRONG');

    await vehicle.save();

    const [brand, model, registrationProvince] = await Promise.all([
      this.repositoryMongo.findVehicleBrand({ slug: vehicle.brand }),
      this.repositoryMongo.findVehicleModel({ slug: vehicle.model }),
      this.repositoryMongo.findProvince({ slug: vehicle.registrationProvince }),
    ]);

    const [imageVehicle, imageBrand] = await Promise.all([
      this.storage.generateSignedUrl(vehicle.image.thumbnail.key),
      this.storage.generateSignedUrl(brand.imageKey),
    ]);

    return PayloadResponse.toVehicleResponse(
      {
        id: vehicle.id,
        accountId: String(vehicle.accountId),
        insureId: String(vehicle.insureId),
        expiredYear: vehicle.expiredYear,
        insureRangeAmount: vehicle.insureRangeAmount,
        vehicleRegistration: vehicle.vehicleRegistration,
        visibility: vehicle.visibility,
        brand,
        model,
        registrationProvince,
        image: vehicle.image,
      },
      {
        imageVehicle: {
          width: vehicle.image.thumbnail.width,
          height: vehicle.image.thumbnail.height,
          key: vehicle.image.thumbnail.key,
          url: imageVehicle,
        },
        imageBrand: imageBrand,
      }
    );
  }

  async listVehicle(
    { skip, limit, ...query }: GetVehicleList,
    accountId: string
  ): Promise<ResponseDto<ResponseVehicle[]>> {
    const queryOptions: QueryOptions = {
      skip: skip,
      limit: limit,
    };

    this.logger.time('Vehicle search');

    const vehicles = await this.repositoryMongo.findVehicles(
      {
        ...query,
        accountId,
      },
      queryOptions
    );

    this.logger.timeEnd('Vehicle search');

    const vehiclesResponse = await Promise.all(
      vehicles.map(async (vehicle) => {
        const [brand, model, registrationProvince] = await Promise.all([
          this.repositoryMongo.findVehicleBrand({ slug: vehicle.brand }),
          this.repositoryMongo.findVehicleModel({ slug: vehicle.model }),
          this.repositoryMongo.findProvince({
            slug: vehicle.registrationProvince,
          }),
        ]);

        const [imageVehicle, imageBrand] = await Promise.all([
          this.storage.generateSignedUrl(vehicle.image.thumbnail.key),
          this.storage.generateSignedUrl(brand.imageKey),
        ]);

        return PayloadResponse.toVehicleResponse(
          {
            id: vehicle.id,
            accountId: String(vehicle.accountId),
            insureId: String(vehicle.insureId),
            expiredYear: vehicle.expiredYear,
            insureRangeAmount: vehicle.insureRangeAmount,
            vehicleRegistration: vehicle.vehicleRegistration,
            visibility: vehicle.visibility,
            brand,
            model,
            registrationProvince,
            image: vehicle.image,
          },
          {
            imageVehicle: {
              width: vehicle.image.thumbnail.width,
              height: vehicle.image.thumbnail.height,
              key: vehicle.image.thumbnail.key,
              url: imageVehicle,
            },
            imageBrand: imageBrand,
          }
        );
      })
    );

    return ResponseDto.ok<ResponseVehicle[]>({
      payload: vehiclesResponse,
      meta: Meta.fromDocuments(vehicles, skip, limit),
    });
  }
}
