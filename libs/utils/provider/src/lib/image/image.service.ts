import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

export const IMAGE_PROVIDE = 'image';

@Injectable()
export class ImageService {
  private PERCENT_REDUCE = 40;
  extractMimeType(base64: string): string {
    return base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
  }

  generateFilePath(filePath: string, mimeType: string): string {
    return `${filePath}.${mimeType}`;
  }

  createFileBufferFromBase64(base64: string): Buffer {
    const base64EncodedImageString = base64.replace(
      /^data:image\/\w+;base64,/,
      ''
    );
    return Buffer.from(base64EncodedImageString, 'base64');
  }

  async reduceImageQuality(
    base64Image: string,
    quality: number
  ): Promise<string> {
    const buffer = Buffer.from(base64Image, 'base64');
    const resizedImageBuffer = await sharp(buffer).webp({ quality }).toBuffer();
    const resizedImageBase64 = resizedImageBuffer.toString('base64');
    return resizedImageBase64;
  }

  async reduceImageSize(
    base64Image: string,
    reductionPercentage: number
  ): Promise<string> {
    const buffer = Buffer.from(base64Image, 'base64');
    const image = sharp(buffer);
    const metadata = await image.metadata();

    const newWidth = Math.round(
      metadata.width * (1 - reductionPercentage / 100)
    );
    const newHeight = Math.round(
      metadata.height * (1 - reductionPercentage / 100)
    );

    const resizedImageBuffer = await image
      .resize(newWidth, newHeight)
      .toBuffer();
    const resizedImageBase64 = resizedImageBuffer.toString('base64');
    return resizedImageBase64;
  }

  async getImageDimensions(
    base64Image: string
  ): Promise<{ width: number; height: number }> {
    const buffer = Buffer.from(base64Image, 'base64');
    const image = sharp(buffer);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    return { width, height };
  }

  async setImage(base64Image: string) {
    const thumbnail = await this.reduceImageSize(
      base64Image.replace(/^data:image\/\w+;base64,/, ''),
      this.PERCENT_REDUCE
    );

    const [thumbnailSize, originalSize] = await Promise.all([
      this.getImageDimensions(thumbnail),
      this.getImageDimensions(
        base64Image.replace(/^data:image\/\w+;base64,/, '')
      ),
    ]);

    return {
      thumbnail: {
        base64: thumbnail,
        ...thumbnailSize,
      },
      original: {
        base64: base64Image.replace(/^data:image\/\w+;base64,/, ''),
        ...originalSize,
      },
    };
  }
}
