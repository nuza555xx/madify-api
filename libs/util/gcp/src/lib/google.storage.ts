import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class GoogleCloudStorageService {
  private readonly bucketName = 'madify';
  private readonly storage: Storage;

  constructor() {
    this.storage = new Storage({
      projectId: '',
      credentials: {
        client_email: '',
        client_id: '',
        private_key: '',
      },
    });
  }

  async uploadFile(filePath: string, destination: string) {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(destination);
    await file.save(filePath);
    console.log(`File ${filePath} uploaded to ${destination}.`);
  }

  async downloadFile(destination: string, filePath: string) {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(destination);
    await file.download({ destination: filePath });
    console.log(`File ${destination} downloaded to ${filePath}.`);
  }

  async deleteFile(destination: string) {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(destination);
    await file.delete();
    console.log(`File ${destination} deleted.`);
  }
}
