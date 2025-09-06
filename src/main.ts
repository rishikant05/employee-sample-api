import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as logger from 'morgan';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger('dev'));

  // Redirect root path to Swagger documentation
  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/api-docs');
  });

  const options = new DocumentBuilder()
    .setTitle('Employee API')
    .setDescription('Employee Management API for testing purposes')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, swaggerDocument, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(AppModule.port);
}
bootstrap();
