"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const employee_module_1 = require("./employee/employee.module");
const config_enum_1 = require("./shared/config/config.enum");
const logger_service_1 = require("./shared/logger/logger.service");
const shared_module_1 = require("./shared/shared.module");
let AppModule = AppModule_1 = class AppModule {
    constructor(configService, loggerService) {
        this.configService = configService;
        this.loggerService = loggerService;
        AppModule_1.port = this.configService.get(config_enum_1.Configuration.PORT) || 3000;
        this.loggerService.log(`==> PORT on ${AppModule_1.port}`);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            config_1.ConfigModule.forRoot({}),
            employee_module_1.EmployeeModule,
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService, logger_service_1.LoggerService])
], AppModule);
//# sourceMappingURL=app.module.js.map