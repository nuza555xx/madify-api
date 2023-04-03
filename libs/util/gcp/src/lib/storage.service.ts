import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Bucket, GetSignedUrlConfig, Storage } from '@google-cloud/storage';
import { CONFIG_PROVIDE, ConfigKey } from '@madify-api/config';
import { ConfigService } from '@nestjs/config';
import { IStorageConfig } from '@madify-api/interface';
import { MadifyLogger } from '@madify-api/common';
import mimeTypes from 'mimetypes';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class StorageService implements OnModuleInit {
  private storage: Storage;
  private config: IStorageConfig;
  private bucket: Bucket;

  constructor(
    @Inject(CONFIG_PROVIDE) private readonly configService: ConfigService
  ) {}

  onModuleInit() {
    this.config = this.configService.get<IStorageConfig>(ConfigKey.STORAGE);

    this.storage = new Storage({
      credentials: {
        client_email: this.config.clientEmail,
        client_id: this.config.clientId,
        private_key: this.config.privateKey,
      },
    });
    this.bucket = this.storage.bucket(this.config.bucketName);
  }

  private extractMimeType(base64: string): string {
    return base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
  }

  private generateFilePath(filePath: string, mimeType: string): string {
    return `${filePath}.${mimeTypes.detectExtension(mimeType)}`;
  }

  private createFileBufferFromBase64(base64: string): Buffer {
    const base64EncodedImageString = base64.replace(
      /^data:image\/\w+;base64,/,
      ''
    );
    return Buffer.from(base64EncodedImageString, 'base64');
  }

  async uploadFile(filePath: string, base64: string): Promise<string> {
    const mimeType = this.extractMimeType(base64);
    const path = this.generateFilePath(filePath, mimeType);
    const fileBuffer = this.createFileBufferFromBase64(base64);
    await this.saveFileToBucket(path, fileBuffer, mimeType);
    return path;
  }

  private async saveFileToBucket(
    filePath: string,
    fileBuffer: Buffer,
    mimeType: string
  ): Promise<void> {
    const file = this.bucket.file(filePath);
    await file.save(fileBuffer, {
      metadata: { contentType: mimeType, gzip: true },
      private: true,
    });
  }

  async generateSignedUrl(filePath: string): Promise<string> {
    try {
      if (!filePath) return;

      const options: GetSignedUrlConfig = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + this.config.expired,
      };

      const [signedUrl] = await this.bucket
        .file(filePath)
        .getSignedUrl(options);

      return signedUrl;
    } catch (error) {
      throw error;
    }
  }

  // async deleteFile(destination: string) {
  //   const bucket = this.storage.bucket(this.bucketName);
  //   const file = bucket.file(destination);
  //   await file.delete();
  //   console.log(`File ${destination} deleted.`);
  // }
}
