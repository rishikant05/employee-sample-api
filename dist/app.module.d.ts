import { ConfigService } from '@nestjs/config';
import { LoggerService } from './shared/logger/logger.service';
export declare class AppModule {
    private readonly configService;
    private readonly loggerService;
    static port: number;
    constructor(configService: ConfigService, loggerService: LoggerService);
}
