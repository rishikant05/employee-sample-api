import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as logger from 'morgan';

import { AppModule } from './app.module';

async function bootstrap() {
  try {
    console.log('🔄 Starting NestJS application...');
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔌 Port from env: ${process.env.PORT || 'not set'}`);
    
    const app = await NestFactory.create(AppModule);
    app.use(logger('dev'));

    // Enable CORS for all origins (helpful for testing)
    app.enableCors();

    // Simple health check endpoint
    app.getHttpAdapter().get('/health', (req, res) => {
      console.log('💚 Health check accessed');
      res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        port: port,
        env: process.env.NODE_ENV || 'development'
      });
    });

    // Redirect root path to Swagger documentation
    app.getHttpAdapter().get('/', (req, res) => {
      console.log('📍 Root path accessed, redirecting to /api-docs');
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

    const port = AppModule.port || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Application is running on: http://0.0.0.0:${port}`);
    console.log(`📚 Swagger documentation: http://0.0.0.0:${port}/api-docs`);
    console.log(`✅ Server started successfully!`);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

bootstrap().catch((error) => {
  console.error('❌ Bootstrap failed:', error);
  process.exit(1);
});
