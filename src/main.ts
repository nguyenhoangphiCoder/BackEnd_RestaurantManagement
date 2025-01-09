import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
const port = process.env.PORT || 3000;
console.log(`Launched on port ${port}, URL: http://localhost:${port}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({ origin: 'http://localhost:5173', credentials: true });
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'secret',
      resave: false,
      saveUninitialized: false,
    }),
  ); // session middleware for express app
  const config = new DocumentBuilder()
    .setTitle('Restaurants API')
    .setDescription('API for restaurants')
    .setVersion('1.0')
    .addTag('restaurants');
  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
