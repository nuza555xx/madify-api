import { Controller, ControllerOptions, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const MadifyController = (options: ControllerOptions) => {
  return applyDecorators(ApiTags(options.path as string), Controller(options));
};
