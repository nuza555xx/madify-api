import { APIPrefix } from '@madify-api/utils/config';
import { MadifyController } from '@madify-api/utils/decorator';
import { Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@MadifyController({ path: APIPrefix.QUEUE })
export class AuthenticationController {
  @Get('health')
  @HttpCode(HttpStatus.OK)
  healthCheck(): boolean {
    return true;
  }

  @Post('resume')
  @HttpCode(HttpStatus.NO_CONTENT)
  resumeQueue(): void {
    return;
  }

  @Post('pause')
  @HttpCode(HttpStatus.NO_CONTENT)
  pauseQueue(): void {
    return;
  }
}
