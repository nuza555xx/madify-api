import { ConsoleLogger, ConsoleLoggerOptions, LogLevel } from '@nestjs/common';
import { inspect } from 'util';

export class MadifyLogger extends ConsoleLogger {
  private static Levels: LogLevel[] =
    process.env.NODE_ENV === 'production'
      ? ['log', 'error', 'warn']
      : ['log', 'error', 'warn', 'debug', 'verbose'];

  /**
   * Create a logger with context and default options: `MadifyLoggerOptions`
   */
  constructor(
    context?: string,
    options: ConsoleLoggerOptions = {
      logLevels: MadifyLogger.Levels,
      timestamp: true,
    }
  ) {
    super(context, options);
  }

  formatContext(context?: unknown, time?: number) {
    const timeContext = time ? `+${time}ms` : '';

    return `${this.context ?? context ?? ''}#${timeContext}`;
  }

  log(message: any, context?: unknown) {
    super.log(message, this.formatContext(context));
  }

  error(message: any, context?: unknown) {
    super.error(
      message instanceof Error
        ? inspect({
            name: message.name,
            message: message.name,
            stack: message.stack,
          })
        : typeof message === 'string'
        ? message
        : inspect(message),
      '',
      this.formatContext(context)
    );
  }

  warn(message: any, context?: unknown) {
    super.warn(message, this.formatContext(context));
  }
}
