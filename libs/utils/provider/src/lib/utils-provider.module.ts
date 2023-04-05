import { Module } from "@nestjs/common";
import { StorageService } from "./google/storage.service";

export const STORAGE_PROVIDE = "storage";

@Module({
  providers: [
    {
      provide: STORAGE_PROVIDE,
      useClass: StorageService,
    },
  ],
  exports: [STORAGE_PROVIDE],
})
export class MadifyUtilsProviderModule {}

export { StorageService };
