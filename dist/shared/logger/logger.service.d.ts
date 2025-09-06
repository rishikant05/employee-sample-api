import { Logger } from '@nestjs/common';
export declare class LoggerService extends Logger {
    context?: string;
    setContext(context: string): void;
    log(message: any, context?: string): void;
    error(message: any, trace?: string, context?: string): any;
    warn(message: any, context?: string): any;
    debug(message: any, context?: string): any;
    verbose(message: any, context?: string): any;
    formatMessage(message: any): any;
}
