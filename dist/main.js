"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const logger = require("morgan");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger('dev'));
    app.getHttpAdapter().get('/', (req, res) => {
        res.redirect('/api-docs');
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Employee API')
        .setDescription('Employee Management API for testing purposes')
        .setVersion('1.0')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, swaggerDocument, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showRequestDuration: true,
        },
    });
    await app.listen(app_module_1.AppModule.port);
}
bootstrap();
//# sourceMappingURL=main.js.map