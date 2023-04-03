import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { MadifyConfigModule } from '@madify-api/config';

export const STORAGE_PROVIDE = 'storage';
@Module({
  imports: [MadifyConfigModule],
  providers: [
    {
      provide: STORAGE_PROVIDE,
      useClass: StorageService,
    },
  ],
  exports: [STORAGE_PROVIDE],
})
export class MadifyGCPModule {}

export { StorageService };
