import { Bucket, GetSignedUrlConfig, Storage } from "@google-cloud/storage";
import { ConfigKey, IStorageConfig } from "@madify-api/utils/config";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import mimeTypes from "mimetypes";

@Injectable()
export class StorageService implements OnModuleInit {
  private storage: Storage;
  private config: IStorageConfig;
  private bucket: Bucket;

  constructor(private readonly configService: ConfigService) {}

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
      ""
    );
    return Buffer.from(base64EncodedImageString, "base64");
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
    if (!filePath) return;

    const options: GetSignedUrlConfig = {
      version: "v4",
      action: "read",
      expires: Date.now() + this.config.expired,
    };

    const [signedUrl] = await this.bucket.file(filePath).getSignedUrl(options);

    return signedUrl;
  }

  // async deleteFile(destination: string) {
  //   const bucket = this.storage.bucket(this.bucketName);
  //   const file = bucket.file(destination);
  //   await file.delete();
  //   console.log(`File ${destination} deleted.`);
  // }
}
