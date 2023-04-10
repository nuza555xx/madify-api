import { inspect } from 'util';
import { ConsoleLogger, ConsoleLoggerOptions, LogLevel } from '@nestjs/common';

export class MadifyLogger extends ConsoleLogger {
  private static Levels: LogLevel[] =
    process.env.NODE_ENV === 'production'
      ? ['log', 'error', 'warn']
      : ['log', 'error', 'warn', 'debug', 'verbose'];
  private timer: Record<string, number> = {};

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

    return `[${this.context ?? context ?? 'unknown'}] - ${timeContext}`;
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

  time(message: any, context?: string) {
    this.timer[JSON.stringify({ context, message })] = Date.now();
  }

  timeEnd(message: any, context?: string) {
    const afterMs = Date.now();
    const beforeMs = this.timer[JSON.stringify({ context, message })];

    if (!beforeMs) return;

    const time = afterMs - beforeMs;

    delete this.timer[JSON.stringify({ context, message })];

    super.log(message, this.formatContext(context, time));
  }
}
