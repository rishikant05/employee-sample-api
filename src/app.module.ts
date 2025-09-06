/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { EmployeeModule } from './employee/employee.module';
import { Configuration } from './shared/config/config.enum';
import { LoggerService } from './shared/logger/logger.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({}),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService, private readonly loggerService: LoggerService) {
    AppModule.port = this.configService.get(Configuration.PORT) || 3000;
    this.loggerService.log(`==> PORT on ${AppModule.port}`);
  }
}
