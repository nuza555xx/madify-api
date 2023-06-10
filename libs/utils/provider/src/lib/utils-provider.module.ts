import { Module } from '@nestjs/common';
import { StorageService } from './google/storage.service';
import { IMAGE_PROVIDE, ImageService } from './image/image.service';

export const STORAGE_PROVIDE = 'storage';

@Module({
  providers: [
    {
      provide: IMAGE_PROVIDE,
      useClass: ImageService,
    },
    {
      provide: STORAGE_PROVIDE,
      useClass: StorageService,
    },
  ],
  exports: [STORAGE_PROVIDE, IMAGE_PROVIDE],
})
export class MadifyUtilsProviderModule {}

export { StorageService, ImageService, IMAGE_PROVIDE };
