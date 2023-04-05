import { HttpException } from '@nestjs/common';
import { Errors } from './exception.code';

export interface MadifyError<T = any> {
  statusCode: string;
  message: string;
  payload?: T;
}

class MadifyErrors {
  static default = Errors;

  static getLocalizedError<T>(code: string): MadifyError<T> {
    return MadifyErrors.default[code];
  }
}

export class MadifyException<T = any> extends Error {
  constructor(
    private code: keyof typeof MadifyErrors.default,
    private payload?: T
  ) {
    super();
  }

  getLocalizedException() {
    const error = MadifyErrors.getLocalizedError<T>(this.code);

    if (this.payload) error.payload = this.payload;

    return new HttpException(error, Number(error.statusCode));
  }
}
